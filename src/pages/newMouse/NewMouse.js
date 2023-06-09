import './newMouse.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewMouse() {
  const [DPI, setDPI] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setDPI(event.target.value);
  };
  const [battery, setbattery] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setbattery(event.target.value);
  };
  const [connection, setconnection] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setconnection(event.target.value);
  };
  const Set = () => {
    console.log('sss');
    writeUserData(DPI, battery, connection);
  };
  const Name = localStorage.getItem('Name');
  const ID = localStorage.getItem('id');
  function writeUserData(dpi, Battery, Connection) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Mouse/${ID}`), {
      DPI: dpi,
      battery: Battery,
      connection: Connection,
      product_ID: ID,
    });
    alert('Thêm Thông tin Mouse thành công!');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (DPI === '' || battery === '' || connection === '') {
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
          <label htmlFor="DPI">DPI</label>
          <input onChange={Update1} type="text" placeholder="36000" id="DPI" />
        </div>
        <div className="newUserItem">
          <label htmlFor="battery">Battery</label>
          <input onChange={Update2} type="text" placeholder="Infinite" id="battery" />
        </div>
        <div className="newUserItem">
          <label htmlFor="connection">Connection</label>
          <input onChange={Update3} type="text" placeholder="Không dây" id="connection" />
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
