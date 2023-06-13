import './newDiscount.css';
import { React, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewDiscount() {
  const [Type, setFirstName] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setFirstName(event.target.value);
  };
  const [expirationDate, setLastName] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLastName(event.target.value);
  };
  const [name, setEmail] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setEmail(event.target.value);
  };
  const [ratio, setPhone] = useState('');
  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPhone(event.target.value);
  };
  const [state, setEnabled] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setEnabled(event.target.value);
  };
  const [user, setUser] = useState('');

  const Update10 = (event) => {
    // 👇 Get input value from "event"

    setUser(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Type === '' || expirationDate === '' || name === '' || ratio === '' || state === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  function generateUniqueRandomNumber() {
    const MAX_NUMBER = 100;
    const numbers = [];

    // Tạo mảng chứa các số từ 1 đến 100
    for (let i = 1; i <= MAX_NUMBER; i += 1) {
      numbers.push(i);
    }

    // Trộn mảng để tạo sự ngẫu nhiên
    for (let i = numbers.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Lấy số đầu tiên trong mảng và xóa nó khỏi mảng
    return numbers.shift();
  }

  const [idKey, setIdKey] = useState(uuidv4());

  useEffect(() => {
    const randomKey = generateUniqueRandomNumber();
    setIdKey(randomKey);
  }, []);
  console.log(idKey);
  const Set = () => {
    console.log('sss');

    writeUserData(Type, expirationDate, name, ratio, state);
  };
  function writeUserData(type, expirationdate, Name, Ratio, State) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/Discount/${idKey}`), {
      Type: type,
      expirationDate: expirationdate,
      name: Name,
      ratio: Ratio,
      state: State,
      ID: idKey,
      user_ID: user,
    });
    alert('Thêm Phiếu giảm giá thành công!');
    clearInput();
  }
  function clearInput() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('enabled').value = '';
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Discount</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="firstName">Type</label>
          <input onChange={Update1} type="text" placeholder="Free Ship" id="firstName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="lastName">Expiration Date</label>
          <input onChange={Update2} type="text" placeholder="2023-09-30" id="lastName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Name</label>
          <input onChange={Update3} type="text" placeholder="Miễn Phí Ship" id="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="user_ID">User ID</label>
          <input onChange={Update10} type="text" placeholder="User được nhận" id="user_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="pass">Ratio</label>
          <input onChange={Update4} type="text" placeholder="100" id="pass" />
        </div>
        <div className="newUserItem">
          <label htmlFor="enabled">State</label>
          <select onChange={Update7} className="newUserSelect" name="active" id="enabled">
            <option value="" selected disabled />
            <option value="Use">Use</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
