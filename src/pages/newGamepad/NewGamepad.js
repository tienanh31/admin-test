import './newGamepad.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewGamepad() {
  const [Type, setType] = useState('');
  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setType(event.target.value);
  };
  const Set = () => {
    console.log('sss');
    writeUserData(Type);
  };
  const Name = localStorage.getItem('Name');
  const ID = localStorage.getItem('id');
  function writeUserData(type) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Gamepad/${ID}`), {
      Type: type,
      product_ID: a,
    });
    alert('Thêm Thông tin Gamepad thành công!');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Type === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{Name}</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="type">Type</label>
          <input onChange={Update1} type="text" placeholder="Bluetooth / USB-C" id="type" />
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
