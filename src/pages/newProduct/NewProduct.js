import './newProduct.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewProduct() {
  const [name, setName] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"
    setName(event.target.value);
  };
  const [brand_ID, setBrand] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setBrand(event.target.value);
  };
  const [color, setColor] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setColor(event.target.value);
  };
  const [price, setPrice] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPrice(event.target.value);
  };
  const [insurance, setInsurance] = useState('');

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setInsurance(event.target.value);
  };
  const [description, setDescription] = useState('');

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setDescription(event.target.value);
  };
  const [category_ID, setCaterogy] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setCaterogy(event.target.value);
  };
  const [thumbnail, setThumbnail] = useState('');

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setThumbnail(event.target.value);
  };
  const [state, setState] = useState('');

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setState(event.target.value);
  };
  const Set = () => {
    console.log('sss');
    writeUserData(name, brand_ID, color, price, insurance, description, category_ID, thumbnail, state);
  };
  async function writeUserData(Name, Brand, Color, Price, Insurance, Description, Caterogy, Thumbnail, State) {
    const db = getDatabase();

    const a = Math.floor(Math.random() * 100);
    await set(ref(db, `/Product/${a}`), {
      name: Name,
      brand_ID: Brand,
      color: Color,
      price: Price,
      insurance: Insurance,
      description: Description,
      category_ID: Caterogy,
      thumbnail: Thumbnail,
      state: State,
      trademark: '',
      evaluate: '',
      discount_ID: '',
      ID: parseInt(a, 10),
    });
    const key = 'Name';
    localStorage.setItem(key, name);
    const key1 = 'id';
    localStorage.setItem(key1, a);
    console.log(key);
    alert('Thêm Sản Phẩm thành công!');
    window.location.replace(`/dashboard/${category_ID}`);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === '' ||
      brand_ID === '' ||
      color === '' ||
      price === '' ||
      insurance === '' ||
      description === '' ||
      category_ID === '' ||
      thumbnail === '' ||
      state === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
      Set1();
      clearInput();
    }
  };
  const Set1 = () => {};
  function handleClick() {
    Set();
    Set1();
  }
  function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('color').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('price').value = '';
    document.getElementById('insurance').value = '';
    document.getElementById('description').value = '';
    document.getElementById('thumbnail').value = '';
    document.getElementById('caterogy').value = '';
    document.getElementById('state').value = '';
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Product</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="name">Name</label>
          <input onChange={Update1} type="text" placeholder="MSI Gl 65" id="name" />
        </div>
        <div className="newUserItem">
          <label htmlFor="color">Color</label>
          <input onChange={Update3} type="text" placeholder="Black and White" id="color" />
        </div>
        <div className="newUserItem">
          <label htmlFor="brand">Brand</label>
          <input onChange={Update2} type="email" placeholder="MSI" id="brand" />
        </div>
        <div className="newUserItem">
          <label htmlFor="price">Price</label>
          <input onChange={Update4} type="text" placeholder="100$" id="price" />
        </div>
        <div className="newUserItem">
          <label htmlFor="insurance">Insurance</label>
          <input onChange={Update5} type="text" placeholder="12 month" id="insurance" />
        </div>
        <div className="newUserItem">
          <label htmlFor="description">Description</label>
          <div>
            <textarea onChange={Update6} type="text" rows="4" cols="47" placeholder="Product is..." id="description" />
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="caterogy">Caterogy</label>
          <select onChange={Update7} className="newUserSelect" name="active" id="caterogy">
            <option value="" selected disabled />
            <option value="laptop">Laptop</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="gamepad">Gamepad</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
        <div className="newUserItem">
          <label htmlFor="thumbnail">Thumbnail</label>
          <input onChange={Update8} type="text" placeholder="URL..." id="thumbnail" />
        </div>
        <div className="newUserItem" />
        <div className="newUserItem">
          <label htmlFor="state">State</label>
          <select onChange={Update9} className="newUserSelect" name="active" id="state">
            <option value="" selected disabled />
            <option value="New">New</option>
            <option value="Old">Old</option>
          </select>
        </div>
        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
