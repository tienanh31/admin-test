import { React, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, duration } from '@mui/material';
import { Stack } from '@mui/system';
import { getDatabase, ref, set } from 'firebase/database';
import { database } from '../Firebase-config';

export default function PopupHotel(props) {
  // const [ID, setID] = useState();
  // const [NAME, setNAME] = useState();
  // const [LOCATION, setLOCATION] = useState();
  const [id, setId] = useState();

  const Update = (event) => {
    // 👇 Get input value from "event"

    setId(event.target.value);
  };
  const [popular, setPopular] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setPopular(event.target.value);
  };
  const [breakfast, setBreakfast] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setBreakfast(event.target.value);
  };
  const [downtown, setDowntown] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setDowntown(event.target.value);
  };
  const [introduction, setIntroduction] = useState();

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setIntroduction(event.target.value);
  };
  const [location, setLocation] = useState();

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setLocation(event.target.value);
  };
  const [name, setName] = useState();

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setName(event.target.value);
  };
  const [policy, setPolicy] = useState();

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setPolicy(event.target.value);
  };
  const [price, setPrice] = useState();

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setPrice(event.target.value);
  };
  const [timeclose, setTimeclose] = useState();

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setTimeclose(event.target.value);
  };
  const [timeopen, setTimeopen] = useState();

  const Update10 = (event) => {
    // 👇 Get input value from "event"

    setTimeopen(event.target.value);
  };
  const [image, setImage] = useState();

  const Update13 = (event) => {
    // 👇 Get input value from "event"

    setImage(event.target.value);
  };
  const Set = () => {
    writeUserData(
      id,
      popular,
      breakfast,
      downtown,
      introduction,
      location,
      name,
      policy,
      price,
      timeclose,
      timeopen,
      image
    );
  };
  function writeUserData(
    Id,
    Popular,
    Breakfast,
    Downtown,
    Introduction,
    Location,
    Name,
    Policy,
    Price,
    Timeclose,
    Timeopen,
    Image
  ) {
    const db = getDatabase();
    set(ref(db, `/hotel/ ${id}`), {
      id: Id,
      popular: Popular,
      breakfast: Breakfast,
      downtown: Downtown,
      introduction: Introduction,
      location: Location,
      name: Name,
      policy: Policy,
      price: Price,
      timeclose: Timeclose,
      timeopen: Timeopen,
      image: Image,
    });
    alert('Thêm tour thành công!');
  }

  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} position="fixed" background-color="rgba(0,0, 0,.4)">
      <DialogTitle>
        <div>Add New Hotel</div>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="id" onChange={Update} type="text" placeholder="Enter Id" />
            <input id="name" onChange={Update6} type="text" placeholder="Enter Name" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="location" onChange={Update5} type="text" placeholder="Enter Location" />
            <input id="introduction" type="text" onChange={Update4} placeholder="Enter Introduction" />

            <input id="time_open" onChange={Update10} type="text" placeholder="Enter Time open" />
            <input id="time_close" onChange={Update9} type="text" placeholder="Enter Time close" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="price" type="text" onChange={Update8} placeholder="Enter Price" />
            <input id="popular" type="text" onChange={Update1} placeholder="Enter Popular" />
            <input id="policy" type="text" onChange={Update7} placeholder="Enter Policy" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="breakfast" type="text" onChange={Update2} placeholder="Enter Breakfast" />
            <input id="downtown" type="text" onChange={Update3} placeholder="Enter Downtown" />
            <input id="image" type="text" onChange={Update13} placeholder="Enter Url Image Hotel" />
          </Stack>
          <input onClick={Set} type="submit" value="submit" />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
