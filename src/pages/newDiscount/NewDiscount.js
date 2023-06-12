import './newDiscount.css';
import { React, useState } from 'react';
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Type === '' || expirationDate === '' || name === '' || ratio === '' || state === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  const Set = () => {
    console.log('sss');

    writeUserData(Type, expirationDate, name, ratio, state);
  };
  function writeUserData(type, expirationdate, Name, Ratio, State) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/Discount/${a}`), {
      Type: type,
      expirationDate: expirationdate,
      name: Name,
      ratio: Ratio,
      state: State,
      ID: parseInt(a, 10),
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
