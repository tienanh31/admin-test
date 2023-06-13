import './newUser.css';
import { React, useState, useEffect } from 'react';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../Firebase-config';

export default function NewUser() {
  const [first_Name, setFirstName] = useState('');

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setFirstName(event.target.value);
  };
  const [last_Name, setLastName] = useState('');

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLastName(event.target.value);
  };
  const [email, setEmail] = useState('');

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setEmail(event.target.value);
  };
  const [phone, setPhone] = useState('');

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setPhone(event.target.value);
  };
  const [avatar, setAvatar] = useState('');

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setAvatar(event.target.value);
  };
  const [password, setPass] = useState('');

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setPass(event.target.value);
  };
  const [enabled, setEnabled] = useState('');

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setEnabled(event.target.value);
  };
  const handleInputBlur1 = (event) => {
    const value = event.target.value;

    setFirstName(value);
  };
  const handleInputBlur2 = (event) => {
    const value = event.target.value;

    setLastName(value);
  };
  const handleInputBlur3 = (event) => {
    const value = event.target.value;

    setEmail(value);
  };
  const handleInputBlur4 = (event) => {
    const value = event.target.value;

    setPhone(value);
  };
  const handleInputBlur5 = (event) => {
    const value = event.target.value;

    setAvatar(value);
  };
  const handleInputBlur7 = (event) => {
    const value = event.target.value;

    setEnabled(value);
  };
  const handleInputBlur6 = (event) => {
    const value = event.target.value;

    setPass(value);
  };
  const handleBlur = (event) => {
    handleInputBlur1();
    handleInputBlur2();
    handleInputBlur3();
    handleInputBlur4();
    handleInputBlur5();
    handleInputBlur6();
    handleInputBlur7();
  };
  function generateUniqueRandomNumber() {
    const MAX_NUMBER = 100;
    const numbers = [];

    // Tạo mảng chứa các số từ 1 đến 100
    for (let i = 1; i <= MAX_NUMBER; i += 1) {
      numbers.push(i);
    }

    // Trộn mảng để tạo sự ngẫu nhiên
    for (let i = numbers.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Lấy số đầu tiên trong mảng và xóa nó khỏi mảng
    return numbers.shift();
  }

  const [idKey, setIdKey] = useState(uuidv4());

  useEffect(() => {
    const randomKey = generateUniqueRandomNumber();
    setIdKey(randomKey);
  }, []);
  console.log(idKey);

  // Lưu idKey này lên Firebase Realtime Database
  console.log(email);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      first_Name === '' ||
      last_Name === '' ||
      phone === '' ||
      email === '' ||
      avatar === '' ||
      password === '' ||
      enabled === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
    } else {
      Set();
    }
  };
  const Set = () => {
    console.log('sss');

    writeUserData(first_Name, last_Name, email, phone, avatar, password, enabled);
  };
  function writeUserData(FirstName, LastName, Email, Phone, Avatar, Pass, Enabled) {
    const db = getDatabase();
    const a = Math.floor(Math.random() * 100);

    set(ref(db, `/App_user/${idKey}`), {
      first_Name: FirstName,
      last_Name: LastName,
      email: Email,
      phone: Phone,
      avatar: Avatar,
      password: Pass,
      enabled: Enabled,
      ID: idKey,
      reset_password_token: '',
    });
    alert('Thêm Người dùng thành công!');
    clearInput();
  }
  function clearInput() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('pass').value = '';
    document.getElementById('enabled').value = '';
  }
  function handleClick() {
    handleSubmit();
    Set();
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="firstName">First Name</label>
          <input onChange={Update1} type="text" placeholder="John" id="firstName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={Update2} type="text" placeholder="Smith" id="lastName" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input onChange={Update3} type="email" placeholder="john@gmail.com" id="email" />
        </div>
        <div className="newUserItem">
          <label htmlFor="pass">Password</label>
          <input onChange={Update6} type="password" placeholder="Password" id="pass" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone</label>
          <input onChange={Update4} type="text" placeholder="+84 0123 456 789" id="phone" />
        </div>
        <div className="newUserItem">
          <label htmlFor="avatar">Avatar URL</label>
          <input onChange={Update5} type="text" placeholder="URL..." id="avatar" />
        </div>
        <div className="newUserItem">
          <label htmlFor="enabled">Enabled</label>
          <select onChange={Update7} className="newUserSelect" name="active" id="enabled">
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
