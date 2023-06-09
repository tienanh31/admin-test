import './Mouse.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, get, onValue, remove } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function Mouse() {
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
  const [DPI, setDPI] = useState();

  const Update11 = (event) => {
    // 👇 Get input value from "event"

    setDPI(event.target.value);
  };
  const [battery, setbattery] = useState();

  const Update22 = (event) => {
    // 👇 Get input value from "event"

    setbattery(event.target.value);
  };
  const [connection, setconnection] = useState();

  const Update33 = (event) => {
    // 👇 Get input value from "event"

    setconnection(event.target.value);
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
  const Data_tour = [];
  const [data, setData] = useState('');

  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/Mouse/${Id}`);

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const a = '/dashboard/';
  const Set = () => {
    console.log('sss');
    writeUserData(name, brand_ID, color, price, insurance, description, category_ID, thumbnail, state);
  };
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Product/${Id}`);
    remove(tasksRef).then(() => {
      alert('Xoá sản phẩm thành công!');
      window.location = '/dashboard/product';
    });
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
  const Set1 = () => {
    console.log('sss');
    writeUserData1(DPI, battery, connection);
  };
  function writeUserData1(dpi, Battery, Connection) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Mouse/${Id}`), {
      DPI: dpi || document.getElementById('DPI').defaultValue,
      battery: Battery || document.getElementById('battery').defaultValue,
      connection: Connection || document.getElementById('connection').defaultValue,
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
    Set1();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{namee}</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="name">Name</label>
          <input onChange={Update1} defaultValue={namee} type="text" id="name" />
        </div>
        <div className="newUserItem">
          <label htmlFor="color">Color</label>
          <input onChange={Update3} defaultValue={Colorr} type="text" id="color" />
        </div>
        <div className="newUserItem">
          <label htmlFor="brand">Brand</label>
          <input onChange={Update2} defaultValue={Brand_IDD} type="text" id="brand" />
        </div>
        <div className="newUserItem">
          <label htmlFor="price">Price</label>
          <input onChange={Update4} defaultValue={pricee} type="text" id="price" />
        </div>
        <div className="newUserItem">
          <label htmlFor="insurance">Insurance</label>
          <input onChange={Update5} defaultValue={Insurancee} type="text" id="insurance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="DPI">DPI</label>
          <input defaultValue={data.DPI} onChange={Update11} type="text" id="DPI" />
        </div>
        <div className="newUserItem">
          <label htmlFor="battery">Battery</label>
          <input defaultValue={data.battery} onChange={Update22} type="text" id="battery" />
        </div>
        <div className="newUserItem">
          <label htmlFor="connection">Connection</label>
          <input defaultValue={data.connection} onChange={Update33} type="text" id="connection" />
        </div>
        <div className="newUserItem">
          <label htmlFor="description">Description</label>
          <div>
            <textarea onChange={Update6} defaultValue={Descriptionn} type="text" rows="4" cols="47" id="description" />
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="caterogy">Caterogy</label>
          <input
            onChange={Update7}
            defaultValue={Category_IDD}
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
