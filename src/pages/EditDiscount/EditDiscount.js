import './EditDiscount.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, get, remove } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function EditDiscount() {
  const [Type, setFirstName] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setFirstName(event.target.value);
  };
  const [expirationDate, setLastName] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLastName(event.target.value);
  };
  const [name, setEmail] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setEmail(event.target.value);
  };
  const [ratio, setPhone] = useState();
  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPhone(event.target.value);
  };
  const [state, setEnabled] = useState();

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setEnabled(event.target.value);
  };
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/Discount/${data.ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');

      alert('Xoá Discount thành công!');
      window.location = '/dashboard/discount';
    });
  };
  const Set = () => {
    console.log('sss');

    writeUserData(Type, expirationDate, name, ratio, state);
  };
  function writeUserData(type, expirationdate, Name, Ratio, State) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/Discount/${discount_ID}`), {
      Type: type || document.getElementById('firstName').defaultValue,
      expirationDate: expirationdate || document.getElementById('lastName').defaultValue,
      name: Name || document.getElementById('email').defaultValue,
      ratio: Ratio || document.getElementById('pass').defaultValue,
      state: State || document.getElementById('enabled').value,
      ID: discount_ID,
    });
    alert('Cập nhật thành công!');
  }
  const Datatour = [];
  const discount_ID = localStorage.getItem('discount');

  const [data, setData] = useState('');
  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/Discount/${discount_ID}`);

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(data);
  useEffect(() => {
    console.log(data.state);
    myFunction();
  }, [data]);
  function myFunction() {
    document.getElementById('enabled').value = data.state;
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">{data.name}</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="firstName">Type</label>
          <input onChange={Update1} type="text" defaultValue={data.Type} id="firstName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="lastName">Expiration Date</label>
          <input onChange={Update2} type="text" defaultValue={data.expirationDate} id="lastName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Name</label>
          <input onChange={Update3} type="text" defaultValue={data.name} id="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="pass">Ratio</label>
          <input onChange={Update4} type="text" defaultValue={data.ratio} id="pass" />
        </div>
        <div className="newUserItem">
          <label htmlFor="enabled">State</label>
          <select onChange={Update7} className="newUserSelect" name="active" id="enabled">
            <option value="Use">Use</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <input type="button" onClick={Set} className="newUserButton" value="Update" />
        <input type="button" onClick={Delete} className="newUserButton" value="Delete" />
      </form>
    </div>
  );
}
