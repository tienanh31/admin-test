import './newHeadphone.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewHeadphone() {
  const [Connection_Standard, setConnection_Standard] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setConnection_Standard(event.target.value);
  };
  const [Connection_Type, setConnection_Type] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setConnection_Type(event.target.value);
  };
  const [Impedance, setImpedance] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setImpedance(event.target.value);
  };
  const [Microphone, setMicrophone] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setMicrophone(event.target.value);
  };
  const [Type, setType] = useState('');

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setType(event.target.value);
  };
  const Set = () => {
    console.log('sss');
    writeUserData(Connection_Standard, Connection_Type, Impedance, Microphone, Type);
  };
  const Name1 = localStorage.getItem('Name');
  const ID = localStorage.getItem('id');

  function writeUserData(connection_Standard, connection_Type, impedance, microphone, type) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Headphone/${ID}`), {
      Connection_Standard: connection_Standard,
      Connection_Type: connection_Type,
      Impedance: impedance,
      Microphone: microphone,
      Type: type,
      product_ID: ID,
    });
    alert('Thêm Thông tin Headphone thành công!');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Connection_Standard === '' || Connection_Type === '' || Impedance === '' || Microphone === '' || Type === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{Name1} </h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="Connection_Standard">Connection Standard</label>
          <input onChange={Update1} type="text" placeholder="Type-C" id="Connection_Standard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Connection_Type">Connection Type</label>
          <input onChange={Update2} type="text" placeholder="USB" id="Connection_Type" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Impedance">Impedance</label>
          <input type="text" onChange={Update3} placeholder="Không" id="Impedance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Microphone">Microphone</label>
          <input onChange={Update4} type="text" placeholder="Có" id="Microphone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Type">Type</label>
          <input type="text" onChange={Update5} placeholder="Có dây" id="Type" />
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
