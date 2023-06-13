import './EditOrder.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, get, set, remove, onValue } from 'firebase/database';
import { database } from '../../Firebase-config';
import 'firebase/database';

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
  const Order_ID = localStorage.getItem('order_ID');
  const User_ID = localStorage.getItem('user_ID');
  const Order_total = localStorage.getItem('order_total');
  const Order_status = localStorage.getItem('order_status');

  const Data_tour = [];

  const [data3, setData3] = useState('');
  const [cache3, setCache3] = useState('');

  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, '/Order/');

    get(tasksRef)
      .then((snapshot) => {
        setData3(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // useEffect(() => {
  //   Object.keys(data3).forEach((key) => {
  //     if (data3[key].order_ID === order_ID) {
  //       console.log(data3[key]);
  //       setCache3(data3[key]);
  //     }
  //   });
  //   const db = getDatabase();
  //   const a = Math.floor(Math.random() * 100);
  //   const b = Math.floor(Math.random() * 100);
  //   const c = a + b;
  //   const unique = (+new Date()).toString(36);

  //   set(ref(db, `/Cart/${unique}`), {
  //     order_ID: order_ID || 1,
  //     product_ID: 8,
  //     product_Type: 'Fragile',
  //     quantity: 1,
  //     user_ID: user_ID || 1,
  //     ID: unique,
  //   });
  //   console.log(unique);
  // }, []);
  const [data1, setData1] = useState('');
  const [cache1, setCache1] = useState('');

  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, '/Shipping/');

    get(tasksRef)
      .then((snapshot) => {
        setData1(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const [data, setData] = useState('');
  const [cache, setCache] = useState('');
  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, '/Cart/');

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    Object.keys(data).forEach((key) => {
      if (data[key].order_ID === Order_ID) {
        console.log(data[key]);
        setCache(data[key]);
      }
    });
  }, [data]);
  useEffect(() => {
    Object.keys(data1).forEach((key) => {
      if (data1[key].order_ID === Order_ID) {
        console.log(data1[key]);
        setCache1(data1[key]);
      }
    });
  }, [data1]);
  useEffect(() => {
    myFunction();
  }, [cache]);
  function myFunction() {
    console.log(cache.product_Type);
    document.getElementById('product_Type').value = cache.product_Type;
    console.log(document.getElementById('product_Type').value);
  }
  console.log(data1);
  console.log(cache);
  console.log(cache.ID);

  console.log(cache1.ID);

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
  console.log(Order_status);
  console.log(Order_total);
  console.log(User_ID);
  console.log(Order_ID);

  const Set = () => {
    writeUserData(userID, order_total, order_status);
    console.log(userID, order_total, order_status);
    writeUserData1(product_ID, product_Type, quantity);
    writeUserData3(address_ID, phone, email, receiver);
  };
  const unique = (+new Date()).toString(36);

  function writeUserData(UserID, Order_totall, Order_statuss) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const c = a + b;
    set(ref(db, `/Order/${Order_ID}`), {
      user_ID: UserID || document.getElementById('userID').defaultValue,
      order_total: Order_totall || document.getElementById('order_total').defaultValue,
      order_status: Order_statuss || document.getElementById('order_status').defaultValue,
      ID: Order_ID,
    });
    alert('Sửa Đơn hàng thành công!');
    console.log(userID);
  }
  function writeUserData1(Product_ID, Product_Type, Quantity) {
    const db = getDatabase();
    const unique1 = (+new Date()).toString(36);
    set(ref(db, `/Cart/${cache.ID}`), {
      product_ID: Product_ID || document.getElementById('product_ID').defaultValue,
      product_Type: Product_Type || document.getElementById('product_Type').defaultValue,
      quantity: Quantity || document.getElementById('quantity').defaultValue,
      order_ID: Order_ID,
      user_ID: User_ID || document.getElementById('userID').defaultValue,
      ID: cache.ID,
    });
    console.log(unique1);

    console.log(Product_ID);
    console.log(Product_Type);
    console.log(Quantity);
  }
  function writeUserData3(Address_ID, Phone, Email, Receiver) {
    const db = getDatabase();
    const unique2 = (+new Date()).toString(36);
    set(ref(db, `/Shipping/${cache1.ID}`), {
      address_ID: Address_ID || document.getElementById('andress_ID').defaultValue,
      phone: Phone || document.getElementById('phone').defaultValue,
      email: Email || document.getElementById('email').defaultValue,
      receiver: Receiver || document.getElementById('receiver').defaultValue,
      order_ID: Order_ID,
      ID: cache1.ID,
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
  const Delete1 = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Order/${Order_ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');

      alert('Xoá Đơn hàng thành công!');
      window.location = '/dashboard/Order';
    });
  };
  const Delete2 = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Cart/${cache.ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');
    });
  };
  const Delete3 = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Shipping/${cache1.ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');
    });
  };
  function handleClick() {
    Delete3();
    Delete2();
    Delete1();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Edit Order</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="userID">User ID</label>
          <input onChange={Update1} type="text" defaultValue={User_ID} placeholder="1" id="userID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="order_total">Order Total ($)</label>
          <input onChange={Update2} type="text" defaultValue={Order_total} placeholder="1000" id="order_total" />
        </div>
        <div className="newUserItem">
          <label htmlFor="product_ID">Product ID</label>
          <input onChange={Update4} type="text" defaultValue={cache.product_ID} placeholder="1" id="product_ID" />
        </div>
        <div className="newUserItem">
          <label htmlFor="order_status">Order Status</label>
          <input
            onChange={Update3}
            type="text"
            defaultValue={Order_status}
            placeholder="Delivering or Done"
            id="order_status"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="address_ID">Address ID</label>
          <input onChange={Update7} defaultValue={cache1.address_ID} type="text" placeholder="1" id="address_ID" />
        </div>

        <div className="newUserItem">
          <label htmlFor="quantity">Quantity</label>
          <input onChange={Update6} defaultValue={cache.quantity} type="text" placeholder="1" id="quantity" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Receiver's Phone Nummber</label>
          <input onChange={Update9} type="text" defaultValue={cache1.phone} placeholder="+84 0398 064 715" id="phone" />
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
          <input
            onChange={Update8}
            defaultValue={cache1.email}
            type="email"
            placeholder="favorite@gmail.com"
            id="email"
          />
        </div>
        <div className="newUserItem">
          <label htmlFor="receiver">Receiver</label>
          <input onChange={Update10} defaultValue={cache1.receiver} type="text" placeholder="1" id="receiver" />
        </div>

        <input type="button" onClick={handleSubmit} className="newUserButton" value="Update" />
        <input type="button" onClick={handleClick} className="newUserButton" value="Delete" />
      </form>
    </div>
  );
}
