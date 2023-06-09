import './newKeyboad.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewKeybord() {
  const [Led, setLed] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setLed(event.target.value);
  };
  const [Type, setType] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setType(event.target.value);
  };
  const Set = () => {
    console.log('sss');
    writeUserData(Led, Type);
  };
  const Name = localStorage.getItem('Name');
  const ID = localStorage.getItem('id');
  function writeUserData(led, type) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Keyboard/${ID}`), {
      Led: led,
      Type: type,
      product_ID: a,
    });
    alert('Thêm Thông tin Keyboard thành công!');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Led === '' || Type === '') {
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
          <label htmlFor="Led">LED</label>
          <input onChange={Update1} type="text" placeholder="RGB" id="Led" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Type">Type</label>
          <input onChange={Update2} type="text" placeholder="Bàn phím cơ" id="Type" />
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
