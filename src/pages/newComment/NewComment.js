import './newComment.css';
import { React, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewComment() {
  const [User_ID, setUser_ID] = useState('');
  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setUser_ID(event.target.value);
  };
  const [Product_ID, setProduct_ID] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setProduct_ID(event.target.value);
  };
  const [Detail, setDetail] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setDetail(event.target.value);
  };
  const [Rate, setRate] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setRate(event.target.value);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Product_ID === '' || User_ID === '' || Rate === '' || Detail === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  const Set = () => {
    console.log('sss');

    writeUserData(Product_ID, User_ID, Rate, Detail);
  };
  function writeUserData(product_ID, user_ID, rate, detail) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    const b = a;
    set(ref(db, `/User_comment/${idKey}`), {
      Product_ID: parseInt(product_ID, 10),
      User_ID: user_ID,
      Rate: parseInt(rate, 10),
      Detail: detail,
      ID: idKey,
    });
    const key = 'comment';
    localStorage.setItem(key, idKey);
    alert('Thêm Comment thành công!');
    clearInput();
  }
  function handleClick() {
    handleSubmit();
    Set();
  }
  function clearInput() {
    document.getElementById('User_ID').value = '';
    document.getElementById('Product_ID').value = '';
    document.getElementById('Rate').value = '';
    document.getElementById('Detail').value = '';
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Comment</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="User_ID">User ID</label>
          <input onChange={Update1} type="text" placeholder="01" id="User_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Product_ID">Product ID</label>
          <input onChange={Update2} type="text" placeholder="02" id="Product_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Rate">Rate</label>
          <input onChange={Update4} type="text" placeholder="5" id="Rate" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Detail">Detail</label>
          <input onChange={Update3} placeholder="Detail..." id="Detail" />
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
