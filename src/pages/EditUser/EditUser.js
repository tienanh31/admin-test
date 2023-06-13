import './EditUser.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue, get, remove } from 'firebase/database';
import { database } from '../../Firebase-config';

export default function EditUser() {
  const [first_Name, setFirstName] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setFirstName(event.target.value);
  };
  const [last_Name, setLastName] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLastName(event.target.value);
  };
  const [email, setEmail] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setEmail(event.target.value);
  };
  const [phone, setPhone] = useState();

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPhone(event.target.value);
  };
  const [avatar, setAvatar] = useState();

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setAvatar(event.target.value);
  };
  const [pass, setPass] = useState();

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setPass(event.target.value);
  };
  const [enabled, setEnabled] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setEnabled(event.target.value);
  };
  const avatar1 = localStorage.getItem('avatar');
  const email1 = localStorage.getItem('email');
  const enabled1 = localStorage.getItem('enabled');
  const first_Name1 = localStorage.getItem('first_Name');
  const last_Name1 = localStorage.getItem('last_Name');
  const password1 = localStorage.getItem('password');
  const phone1 = localStorage.getItem('phone');
  const Delete = () => {
    const db = getDatabase();
    const tasksRef = ref(db, `/App_user/${data.ID}`);
    remove(tasksRef).then(() => {
      console.log('sss');

      alert('Xoá người dùng thành công!');
      window.location = '/dashboard/user';
    });
  };
  const Set = () => {
    console.log('sss');

    writeUserData(first_Name, last_Name, email, phone, avatar, pass, enabled);
  };
  function writeUserData(FirstName, LastName, Email, Phone, Avatar, Pass, Enabled) {
    const db = getDatabase();
    set(ref(db, `/App_user/${user_ID}`), {
      first_Name: FirstName || document.getElementById('firstName').defaultValue,
      last_Name: LastName || document.getElementById('lastName').defaultValue,
      email: Email || document.getElementById('email').defaultValue,
      phone: Phone || document.getElementById('phone').defaultValue,
      avatar: Avatar || document.getElementById('avatar').defaultValue,
      password: Pass || document.getElementById('pass').defaultValue,
      enabled: Enabled || document.getElementById('enabled').defaultValue,
      ID: user_ID,
    });
    alert('Cập nhật thành công thành công!');
  }

  const Datatour = [];
  const user_ID = localStorage.getItem('user');

  const [data, setData] = useState('');
  useEffect(() => {
    const db = getDatabase();

    const tasksRef = ref(db, `/App_user/${user_ID}`);

    get(tasksRef)
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    console.log(data.enabled);
    myFunction();
  }, [data]);
  function myFunction() {
    console.log(data.enabled);
    document.getElementById('enabled').value = data.enabled;
    console.log(document.getElementById('enabled').value);
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">
        {data.firstName} {data.lastName}
      </h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="firstName">First Name</label>
          <input onChange={Update1} defaultValue={data.first_Name} type="text" id="firstName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={Update2} type="text" defaultValue={data.last_Name} id="lastName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input onChange={Update3} type="email" defaultValue={data.email} id="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="pass">Password</label>
          <input onChange={Update6} type="text" defaultValue={data.password} id="pass" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone</label>
          <input onChange={Update4} type="text" defaultValue={data.phone} id="phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="avatar">Avatar URL</label>
          <input onChange={Update5} type="text" defaultValue={data.avatar} id="avatar" />
        </div>
        <div className="newUserItem">
          <label htmlFor="enabled">Enabled</label>
          <select onChange={Update7} className="newUserSelect" name="active" id="enabled">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <input type="button" onClick={Set} className="newUserButton" value="Update" />
        <input type="button" onClick={Delete} className="newUserButton" value="Delete" />
      </form>
    </div>
  );
}
