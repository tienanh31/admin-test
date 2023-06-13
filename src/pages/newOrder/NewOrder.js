import './newOrder.css';
import { React, useState } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function NewOrder() {
  const [userID, setUserID] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setUserID(event.target.value);
  };
  const [order_total, setOrder_total] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setOrder_total(event.target.value);
  };
  const [order_status, setOrder_Status] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setOrder_Status(event.target.value);
  };
  const [product_ID, setProduct_ID] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setProduct_ID(event.target.value);
  };
  const [product_Type, setProduct_Type] = useState('');

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setProduct_Type(event.target.value);
  };
  const [quantity, setQuantity] = useState('');

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setQuantity(event.target.value);
  };
  const [address_ID, setAddress_ID] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setAddress_ID(event.target.value);
  };
  const [email, setEmail] = useState('');

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setEmail(event.target.value);
  };
  const [phone, setPhone] = useState('');

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setPhone(event.target.value);
  };
  const [receiver, setReceiver] = useState('');

  const Update10 = (event) => {
    // 👇 Get input value from "event"

    setReceiver(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (userID === '' ||
        order_total === '' ||
        order_status === '' ||
        product_ID === '' ||
        product_Type === '' ||
        quantity === '',
      address_ID === '',
      phone === '',
      email === '',
      receiver === '')
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  const Set = () => {
    console.log('sss');
    writeUserData(userID, order_total, order_status);
    writeUserData1(product_ID, product_Type, quantity);
    writeUserData3(address_ID, phone, email, receiver);
    clearInput();
  };
  const unique = (+new Date()).toString(36);

  function writeUserData(UserID, Order_total, Order_status) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const c = a + b;
    set(ref(db, `/Order/${unique}`), {
      userID: UserID,
      order_total: Order_total,
      order_status: Order_status,
      ID: unique,
    });
    alert('Thêm Đơn hàng thành công!');
    console.log(unique);
  }
  function writeUserData1(Product_ID, Product_Type, Quantity) {
    const db = getDatabase();
    const unique1 = (+new Date()).toString(36);
    set(ref(db, `/Cart/${unique1}`), {
      product_ID: Product_ID,
      product_Type: Product_Type,
      quantity: Quantity,
      order_ID: unique,
      user_ID: userID,
      ID: unique1,
    });
    console.log(unique1);

    console.log(Product_ID);
    console.log(Product_Type);
    console.log(Quantity);
  }
  function writeUserData3(Address_ID, Phone, Email, Receiver) {
    const db = getDatabase();
    const unique2 = (+new Date()).toString(36);
    set(ref(db, `/Shipping/${unique2}`), {
      address_ID: Address_ID,
      phone: Phone,
      email: Email,
      receiver: Receiver,
      order_ID: unique,
      ID: unique2,
    });
    console.log(unique2);
  }
  function clearInput() {
    document.getElementById('userID').value = '';
    document.getElementById('order_total').value = '';
    document.getElementById('product_ID').value = '';
    document.getElementById('order_status').value = '';
    document.getElementById('address_ID').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('product_Type').value = '';
    document.getElementById('email').value = '';
    document.getElementById('receiver').value = '';
  }
  function handleClick() {
    handleSubmit();
    Set();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Order</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="userID">User ID</label>
          <input onChange={Update1} type="text" placeholder="1" id="userID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="order_total">Order Total ($)</label>
          <input onChange={Update2} type="text" placeholder="1000" id="order_total" />
        </div>
        <div className="newUserItem">
          <label htmlFor="product_ID">Product ID</label>
          <input onChange={Update4} type="text" placeholder="1" id="product_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="order_status">Order Status</label>
          <input onChange={Update3} type="text" placeholder="Delivering or Done" id="order_status" />
        </div>
        <div className="newUserItem">
          <label htmlFor="address_ID">Address ID</label>
          <input onChange={Update7} type="text" placeholder="1" id="address_ID" />
        </div>

        <div className="newUserItem">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={Update6} type="text" placeholder="1" id="quantity" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Receiver's Phone Nummber</label>
          <input onChange={Update9} type="text" placeholder="+84 0398 064 715" id="phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="product_Type">Product Type</label>
          <select onChange={Update5} className="newUserSelect" name="active" id="product_Type">
            <option value="" selected disabled />
            <option value="Fragile">Fragile</option>
            <option value="Normal">Normal</option>
          </select>
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Receiver's Email</label>
          <input onChange={Update8} type="email" placeholder="favorite@gmail.com" id="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="receiver">Receiver</label>
          <input onChange={Update10} type="text" placeholder="1" id="receiver" />
        </div>

        <input type="button" onClick={handleSubmit} className="newUserButton" value="Create" />
      </form>
    </div>
  );
}
