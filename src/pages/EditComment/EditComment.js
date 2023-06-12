import './EditComment.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, get, remove } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function EditComment() {
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
  const Comment = localStorage.getItem('comment');
  const email1 = localStorage.getItem('email');
  const enabled1 = localStorage.getItem('enabled');
  const first_Name1 = localStorage.getItem('first_Name');
  const last_Name1 = localStorage.getItem('last_Name');
  const password1 = localStorage.getItem('password');
  const phone1 = localStorage.getItem('phone');
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/User_comment/${data.ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');

      alert('Xoá comment thành công!');
      window.location = '/dashboard/comment';
    });
  };
  const Set = () => {
    console.log('sss');

    writeUserData(Product_ID, User_ID, Rate, Detail);
  };
  function writeUserData(product_ID, user_ID, rate, detail) {
    const db = getDatabase();
    set(ref(db, `/User_comment/${Comment}`), {
      User_ID: user_ID || document.getElementById('User_ID').defaultValue,
      Product_ID: product_ID || document.getElementById('Product_ID').defaultValue,
      Rate: rate || document.getElementById('Rate').defaultValue,
      Detail: detail || document.getElementById('Detail').defaultValue,
      ID: user_ID,
    });
    alert('Cập nhật  công thành công!');
  }
  const Datatour = [];
  const user_ID = localStorage.getItem('user');

  const [data, setData] = useState(Datatour);
  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/User_comment/${Comment}`);

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Comment</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="User_ID">User ID</label>
          <input onChange={Update1} type="text" placeholder="01" defaultValue={data.User_ID} id="User_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Product_ID">Product ID</label>
          <input onChange={Update2} type="text" placeholder="02" defaultValue={data.Product_ID} id="Product_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Rate">Rate</label>
          <input onChange={Update3} type="text" defaultValue={data.Rate} placeholder="5" id="Rate" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Detail">Detail</label>
          <input onChange={Update4} defaultValue={data.Detail} placeholder="Detail..." id="Detail" />
        </div>
        <input type="button" onClick={Set} className="newUserButton" value="Update" />
        <input type="button" onClick={Delete} className="newUserButton" value="Delete" />
      </form>
    </div>
  );
}
