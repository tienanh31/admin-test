import './Laptop.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, remove, get } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function Laptop() {
  const [name, setName] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"
    setName(event.target.value);
  };
  const [brand_ID, setBrand] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setBrand(event.target.value);
  };
  const [color, setColor] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setColor(event.target.value);
  };
  const [price, setPrice] = useState();

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPrice(event.target.value);
  };
  const [insurance, setInsurance] = useState();

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setInsurance(event.target.value);
  };
  const [description, setDescription] = useState();

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setDescription(event.target.value);
  };
  const [category_ID, setCaterogy] = useState();

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setCaterogy(event.target.value);
  };
  const [thumbnail, setThumbnail] = useState();

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setThumbnail(event.target.value);
  };
  const [state, setState] = useState();

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setState(event.target.value);
  };
  const [Battery, setBattery] = useState();

  const Update11 = (event) => {
    // 👇 Get input value from "event"

    setBattery(event.target.value);
  };
  const [CPU, setCpu] = useState();

  const Update22 = (event) => {
    // 👇 Get input value from "event"

    setCpu(event.target.value);
  };
  const [CommunicationPort, setCommunicationPort] = useState();

  const Update33 = (event) => {
    // 👇 Get input value from "event"

    setCommunicationPort(event.target.value);
  };
  const [GraphicCard, setGraphicCard] = useState();

  const Update44 = (event) => {
    // 👇 Get input value from "event"

    setGraphicCard(event.target.value);
  };
  const [Keyboard, setKeyboard] = useState();

  const Update55 = (event) => {
    // 👇 Get input value from "event"

    setKeyboard(event.target.value);
  };
  const [Lan, setLan] = useState();

  const Update66 = (event) => {
    // 👇 Get input value from "event"

    setLan(event.target.value);
  };
  const [OS, setOS] = useState();

  const Update77 = (event) => {
    // 👇 Get input value from "event"

    setOS(event.target.value);
  };
  const [Ram, setRam] = useState();

  const Update88 = (event) => {
    // 👇 Get input value from "event"

    setRam(event.target.value);
  };
  const [Screen, setScreen] = useState();

  const Update99 = (event) => {
    // 👇 Get input value from "event"

    setScreen(event.target.value);
  };
  const [StorageDrive, setStorageDrive] = useState();

  const Update100 = (event) => {
    // 👇 Get input value from "event"

    setStorageDrive(event.target.value);
  };
  const namee = localStorage.getItem('Name');
  const thumbnaill = localStorage.getItem('Thumbnail');
  const pricee = localStorage.getItem('Price');
  const statee = localStorage.getItem('state');
  const Category_IDD = localStorage.getItem('Category_ID');
  const Brand_IDD = localStorage.getItem('Brand_ID');
  const Colorr = localStorage.getItem('Color');
  const Descriptionn = localStorage.getItem('Description');
  const Insurancee = localStorage.getItem('Insurance');
  const Id = localStorage.getItem('Product_ID');

  const a = '/dashboard/';
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Product/${Id}`);
    remove(tasksRef).then(() => {
      console.log('location removed');
      alert('Xoá sản phẩm thành công!');
      window.location = '/dashboard/product';
    });
  };
  const Data_tour = [];
  const [data, setData] = useState('');
  console.log(statee);
  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/Laptop/${Id}`);

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const Set = () => {
    console.log('sss');
    writeUserData(name, brand_ID, color, price, insurance, description, category_ID, thumbnail, state);
  };

  function writeUserData(Name, Brand, Color, Price, Insurance, Description, Caterogy, Thumbnail, State) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/Product/${Id}`), {
      name: Name || document.getElementById('name').defaultValue,
      brand_ID: Brand || document.getElementById('brand').defaultValue,
      color: Color || document.getElementById('color').defaultValue,
      price: Price || document.getElementById('price').defaultValue,
      insurance: Insurance || document.getElementById('insurance').defaultValue,
      description: Description || document.getElementById('description').defaultValue,
      category_ID: Caterogy || document.getElementById('caterogy').defaultValue,
      thumbnail: Thumbnail || document.getElementById('thumbnail').defaultValue,
      state: State || document.getElementById('state').value,
      trademark: '',
      evaluate: '',
      discount_ID: '',
      ID: Id,
    });
    const key = 'Name';
    localStorage.setItem(key, name);
    const key1 = 'id';
    localStorage.setItem(key, a);
    console.log(key);

    alert('Cập nhật thành công!');
  }
  const Set2 = () => {
    console.log('sss');
    writeUserData1(Battery, CPU, CommunicationPort, GraphicCard, Keyboard, Lan, OS, Ram, Screen, StorageDrive);
  };

  function writeUserData1(battery, cpu, communicationPort, graphicCard, keyboard, lan, os, ram, screen, storageDrive) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Laptop/${Id}`), {
      Battery: battery || document.getElementById('Battery').defaultValue,
      CPU: cpu || document.getElementById('CPU').defaultValue,
      CommunicationPort: communicationPort || document.getElementById('CommunicationPort').defaultValue,
      GraphicCard: graphicCard || document.getElementById('GraphicCard').defaultValue,
      Keyboard: keyboard || document.getElementById('Keyboard').defaultValue,
      Lan: lan || document.getElementById('Lan').defaultValue,
      OS: os || document.getElementById('OS').defaultValue,
      Ram: ram || document.getElementById('Ram').defaultValue,
      Screen: screen || document.getElementById('Screen').defaultValue,
      StorageDrive: storageDrive || document.getElementById('StorageDrive').defaultValue,
      product_ID: Id,
    });
  }
  useEffect(() => {
    console.log(data.state);
    myFunction();
  }, [data]);
  function myFunction() {
    document.getElementById('state').value = data.state;
  }
  function handleClick() {
    Set();
    Set2();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{namee}</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="name">Name</label>
          <input defaultValue={namee} onChange={Update1} type="text" id="name" />
        </div>
        <div className="newUserItem">
          <label htmlFor="color">Color</label>
          <input defaultValue={Colorr} onChange={Update3} type="text" id="color" />
        </div>
        <div className="newUserItem">
          <label htmlFor="brand">Brand</label>
          <input defaultValue={Brand_IDD} onChange={Update2} type="text" id="brand" />
        </div>
        <div className="newUserItem">
          <label htmlFor="price">Price</label>
          <input defaultValue={pricee} onChange={Update4} type="text" id="price" />
        </div>
        <div className="newUserItem">
          <label htmlFor="insurance">Insurance</label>
          <input defaultValue={Insurancee} onChange={Update5} type="text" id="insurance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="CPU">CPU</label>
          <input defaultValue={data.CPU} onChange={Update2} type="text" id="CPU" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Battery">Battery</label>
          <input defaultValue={data.Battery} onChange={Update11} type="text" id="Battery" />
        </div>
        <div className="newUserItem">
          <label htmlFor="GraphicCard">Graphic Card</label>
          <input defaultValue={data['Graphic Card']} type="text" onChange={Update44} id="GraphicCard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Keyboard">KeyBoard</label>
          <input defaultValue={data.Keyboard} onChange={Update55} type="text" id="Keyboard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Ram">RAM</label>
          <input defaultValue={data.Ram} type="text" onChange={Update88} id="Ram" />
        </div>
        <div className="newUserItem">
          <label htmlFor="OS">OS</label>
          <input defaultValue={data.OS} onChange={Update77} type="text" id="OS" />
        </div>

        <div className="newUserItem">
          <label htmlFor="CommunicationPort">Communication Port</label>
          <input defaultValue={data['Communication Port']} onChange={Update33} type="text" id="CommunicationPort" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Screen">Screen</label>
          <input defaultValue={data.Screen} onChange={Update99} type="text" id="Screen" />
        </div>
        <div className="newUserItem">
          <label htmlFor="StorageDrive">Storage Drive</label>
          <input defaultValue={data['Storage Drive']} onChange={Update100} type="text" id="StorageDrive" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Lan">LAN</label>
          <select defaultValue={data.Lan} onChange={Update66} className="newUserSelect" name="active" id="Lan">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label htmlFor="description">Description</label>
          <div>
            <textarea defaultValue={Descriptionn} onChange={Update6} type="text" rows="4" cols="47" id="description" />
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="caterogy">Caterogy</label>
          <input
            onChange={Update7}
            value={Category_IDD}
            readOnly
            className="newUserSelect"
            name="active"
            id="caterogy"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input onChange={Update8} defaultValue={thumbnaill} type="text" id="thumbnail" />
        </div>
        <div className="newUserItem" />
        <div className="newUserItem">
          <label htmlFor="state">State</label>
          <select onChange={Update9} className="newUserSelect" name="active" id="state">
            <option value="New">New</option>
            <option value="Old">Old</option>
          </select>
        </div>
        <input type="button" onClick={handleClick} className="newUserButton" value="Update" />
        <input type="button" onClick={Delete} className="newUserButton" value="Delete" />
      </form>
    </div>
  );
}
