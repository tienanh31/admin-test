import './Headphone.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, remove, get } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function Headphone() {
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
  const [Connection_Standard, setConnection_Standard] = useState();

  const Update11 = (event) => {
    // 👇 Get input value from "event"

    setConnection_Standard(event.target.value);
  };
  const [Connection_Type, setConnection_Type] = useState();

  const Update22 = (event) => {
    // 👇 Get input value from "event"

    setConnection_Type(event.target.value);
  };
  const [Impedance, setImpedance] = useState();

  const Update33 = (event) => {
    // 👇 Get input value from "event"

    setImpedance(event.target.value);
  };
  const [Microphone, setMicrophone] = useState();

  const Update44 = (event) => {
    // 👇 Get input value from "event"

    setMicrophone(event.target.value);
  };
  const [Type, setType] = useState();

  const Update55 = (event) => {
    // 👇 Get input value from "event"

    setType(event.target.value);
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
  const Data_tour = [];
  const [data, setData] = useState('');

  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/Headphone/${Id}`);

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
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Product/${Id}`);
    remove(tasksRef).then(() => {
      console.log('sss');

      alert('Xoá sản phẩm thành công!');
    });
  };
  function writeUserData(Name, Brand, Color, Price, Insurance, Description, Caterogy, Thumbnail, State) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/Product/ ${Id}`), {
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
    writeUserData1(Connection_Standard, Connection_Type, Impedance, Microphone, Type);
  };
  const Name1 = localStorage.getItem('Name');
  const ID = localStorage.getItem('id');

  function writeUserData1(connection_Standard, connection_Type, impedance, microphone, type) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    set(ref(db, `/Headphone/ ${Id}`), {
      ConnectionStandard: connection_Standard || document.getElementById('ConnectionStandard').defaultValue,
      ConnectionType: connection_Type || document.getElementById('ConnectionType').defaultValue,
      Impedance: impedance || document.getElementById('Impedance').defaultValue,
      Microphone: microphone || document.getElementById('Microphone').defaultValue,
      Type: type || document.getElementById('Type').defaultValue,
      product_ID: Id,
    });
  }
  useEffect(() => {
    console.log(data.state);
    myFunction();
  }, [data]);
  function myFunction() {
    document.getElementById('state').value = statee;
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
          <input onChange={Update2} type="text" defaultValue={Brand_IDD} id="brand" />
        </div>
        <div className="newUserItem">
          <label htmlFor="price">Price</label>
          <input onChange={Update4} type="text" defaultValue={pricee} id="price" />
        </div>
        <div className="newUserItem">
          <label htmlFor="insurance">Insurance</label>
          <input onChange={Update5} type="text" defaultValue={Insurancee} id="insurance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="ConnectionStandard">Connection Standard</label>
          <input defaultValue={data.Connection_Standard} onChange={Update11} type="text" id="ConnectionStandard" />
        </div>
        <div className="newUserItem">
          <label htmlFor="ConnectionType">Connection Type</label>
          <input defaultValue={data.onnection_Type} onChange={Update22} type="text" id="ConnectionType" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Impedance">Impedance</label>
          <input defaultValue={data.Impedance} type="text" onChange={Update33} id="Impedance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Microphone">Microphone</label>
          <input defaultValue={data.Microphone} onChange={Update44} type="text" id="Microphone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="Type">Type</label>
          <input type="text" onChange={Update55} id="Type" />
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
