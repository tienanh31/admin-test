import './newComment.css';
import { React, useState } from 'react';
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

    set(ref(db, `/User_comment/${a}`), {
      Product_ID: product_ID,
      User_ID: user_ID,
      Rate: rate,
      Detail: detail,
      ID: parseInt(a, 10),
    });
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
