import { React, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, duration } from '@mui/material';
import { Stack } from '@mui/system';
import { getDatabase, ref, set } from 'firebase/database';
import { database } from '../Firebase-config';

export default function PopupAir(props) {
  // const [ID, setID] = useState();
  // const [NAME, setNAME] = useState();
  // const [LOCATION, setLOCATION] = useState();
  const [id, setId] = useState();

  const Update = (event) => {
    // 👇 Get input value from "event"

    setId(event.target.value);
  };
  const [locationstart, setLocationstart] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setLocationstart(event.target.value);
  };
  const [locationend, setLocaitonend] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLocaitonend(event.target.value);
  };
  const [timestart, setTimestart] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setTimestart(event.target.value);
  };
  const [timeend, setTimeend] = useState();

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setTimeend(event.target.value);
  };
  const [price, setPrice] = useState();

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setPrice(event.target.value);
  };
  const [date, setDate] = useState();
  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setDate(event.target.value);
  };
  const Set = () => {
    writeUserData(id, locationstart, locationend, timestart, timeend, price, date);
  };
  function writeUserData(Id, Locationstart, Locationend, Timestart, TimeEnd, Price, Date) {
    const db = getDatabase();
    set(ref(db, `/air/ ${id}`), {
      id: Id,
      location_start: Locationstart,
      location_end: Locationend,
      time_start: Timestart,
      time_end: TimeEnd,
      price: Price,
      date: Date,
    });
    alert('Thêm Vé máy bay thành công!');
  }

  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} position="fixed" background-color="rgba(0,0, 0,.4)">
      <DialogTitle>
        <div>Add New Air Ticket</div>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="id" type="text" onChange={Update} placeholder="Enter Id" />
            <input id="date" type="text" onChange={Update6} placeholder="Enter Date" />
            <input id="location_start" onChange={Update1} type="text" placeholder="Enter Location Start" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="location_end" onChange={Update2} type="text" placeholder="Enter Location End" />
            <input id="time_start" onChange={Update3} type="text" placeholder="Enter Time Start" />
            <input id="time_end" onChange={Update4} type="text" placeholder="Enter Time End" />
          </Stack>
          <input id="Price" onChange={Update5} type="text" placeholder="Enter Price" />
          <input onClick={Set} type="submit" value="submit" />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
