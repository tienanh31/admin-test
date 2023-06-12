import './newLaptop.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewLaptop() {
  const [Battery, setBattery] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setBattery(event.target.value);
  };
  const [CPU, setCpu] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setCpu(event.target.value);
  };
  const [CommunicationPort, setCommunicationPort] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setCommunicationPort(event.target.value);
  };
  const [GraphicCard, setGraphicCard] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setGraphicCard(event.target.value);
  };
  const [Keyboard, setKeyboard] = useState('');

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setKeyboard(event.target.value);
  };
  const [Lan, setLan] = useState('');

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setLan(event.target.value);
  };
  const [OS, setOS] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setOS(event.target.value);
  };
  const [Ram, setRam] = useState('');

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setRam(event.target.value);
  };
  const [Screen, setScreen] = useState('');

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setScreen(event.target.value);
  };
  const [StorageDrive, setStorageDrive] = useState('');

  const Update10 = (event) => {
    // 👇 Get input value from "event"

    setStorageDrive(event.target.value);
  };

  const Set = () => {
    console.log('sss');
    writeUserData(Battery, CPU, CommunicationPort, GraphicCard, Keyboard, Lan, OS, Ram, Screen, StorageDrive);
  };
  const ID = localStorage.getItem('id');

  function writeUserData(battery, cpu, communicationPort, graphicCard, keyboard, lan, os, ram, screen, storageDrive) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Laptop/${ID}`), {
      Battery: battery,
      CPU: cpu,
      CommunicationPort: communicationPort,
      GraphicCard: graphicCard,
      Keyboard: keyboard,
      Lan: lan,
      OS: os,
      Ram: ram,
      Screen: screen,
      StorageDrive: storageDrive,
      product_ID: ID,
    });
    alert('Thêm Thông tin Laptop thành công!');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Battery === '' ||
      CPU === '' ||
      CommunicationPort === '' ||
      GraphicCard === '' ||
      Keyboard === '' ||
      Lan === '' ||
      OS === '' ||
      Ram === '' ||
      Screen === '' ||
      StorageDrive === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  const Name1 = localStorage.getItem('Name');
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{Name1} </h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="CPU">CPU</label>
          <input
            onChange={Update2}
            type="text"
            placeholder="Core i9 9980HK (2.4Ghz upto 5.00Ghz, 8 nhân 16 luồng, 16MB)"
            id="CPU"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="Battery">Battery</label>
          <input onChange={Update1} type="text" placeholder="4 hours" id="Battery" />
        </div>
        <div className="newUserItem">
          <label htmlFor="GraphicCard">Graphic Card</label>
          <input type="text" onChange={Update4} placeholder="nVidia Geforce RTX2080 6GB GDDR6" id="GraphicCard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Keyboard">KeyBoard</label>
          <input onChange={Update5} type="text" placeholder=" Đèn nền bàn phím led RGB" id="Keyboard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Ram">RAM</label>
          <input type="text" onChange={Update8} placeholder="64GB DDR4 " id="Ram" />
        </div>
        <div className="newUserItem">
          <label htmlFor="OS">OS</label>
          <input onChange={Update7} type="text" placeholder=" Windows 10 Home" id="OS" />
        </div>

        <div className="newUserItem">
          <label htmlFor="CommunicationPort">Communication Port</label>
          <input onChange={Update3} type="text" placeholder="USB, Type-C, ..." id="CommunicationPort" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Screen">Screen</label>
          <input
            onChange={Update9}
            type="text"
            placeholder=" 17.3'' FHD (1920*1080), IPS không gương 144Hz Viền mỏng"
            id="Screen"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="StorageDrive">Storage Drive</label>
          <input
            onChange={Update10}
            type="text"
            placeholder="3 x 512GB NVMe PCIe SSD gen3 x 4 (1,5 TB SSD)"
            id="StorageDrive"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="Lan">LAN</label>
          <select onChange={Update6} className="newUserSelect" name="active" id="Lan">
            <option value="" selected disabled />
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
