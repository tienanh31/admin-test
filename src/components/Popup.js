import { React, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, duration } from '@mui/material';
import { Stack } from '@mui/system';
import { getDatabase, ref, set } from 'firebase/database';
import { database } from '../Firebase-config';

export default function Popup(props) {
  // const [ID, setID] = useState();
  // const [NAME, setNAME] = useState();
  // const [LOCATION, setLOCATION] = useState();
  const [id, setId] = useState();

  const Update = (event) => {
    // 👇 Get input value from "event"

    setId(event.target.value);
  };
  const [name, setName] = useState();

  const Update1 = (event) => {
    // 👇 Get input value from "event"

    setName(event.target.value);
  };
  const [location, setLocation] = useState();

  const Update2 = (event) => {
    // 👇 Get input value from "event"

    setLocation(event.target.value);
  };
  const [time, setTime] = useState();

  const Update3 = (event) => {
    // 👇 Get input value from "event"

    setTime(event.target.value);
  };
  const [member, setMember] = useState();

  const Update4 = (event) => {
    // 👇 Get input value from "event"

    setMember(event.target.value);
  };
  const [cost, setCost] = useState();

  const Update5 = (event) => {
    // 👇 Get input value from "event"

    setCost(event.target.value);
  };
  const [type, setType] = useState();

  const Update6 = (event) => {
    // 👇 Get input value from "event"

    setType(event.target.value);
  };
  const [vehicles, setVehicles] = useState();

  const Update7 = (event) => {
    // 👇 Get input value from "event"

    setVehicles(event.target.value);
  };
  const [duration, setDuration] = useState();

  const Update8 = (event) => {
    // 👇 Get input value from "event"

    setDuration(event.target.value);
  };
  const [costunder, setConstunder] = useState();

  const Update9 = (event) => {
    // 👇 Get input value from "event"

    setConstunder(event.target.value);
  };
  const [costover, setOver] = useState();

  const Update10 = (event) => {
    // 👇 Get input value from "event"

    setOver(event.target.value);
  };
  const [departure, setDeparture] = useState();

  const Update11 = (event) => {
    // 👇 Get input value from "event"

    setDeparture(event.target.value);
  };
  const [introduction, setIntroduction] = useState();

  const Update12 = (event) => {
    // 👇 Get input value from "event"

    setIntroduction(event.target.value);
  };
  const [image, setImage] = useState();

  const Update13 = (event) => {
    // 👇 Get input value from "event"

    setImage(event.target.value);
  };
  const Set = () => {
    writeUserData(
      id,
      name,
      location,
      time,
      member,
      cost,
      type,
      vehicles,
      duration,
      costunder,
      costover,
      departure,
      introduction,
      image
    );
  };
  function writeUserData(
    Id,
    Name,
    Location,
    Time,
    Member,
    Cost,
    Type,
    Vehicles,
    Duration,
    Costunder,
    Costover,
    Departure,
    Introduction,
    Image
  ) {
    const db = getDatabase();
    set(ref(db, `/tour/ ${id}`), {
      id: Id,
      name: Name,
      location: Location,
      time: Time,
      member: Member,
      cost: Cost,
      type: Type,
      vehicles: Vehicles,
      duration: Duration,
      cost_children_under4: Costunder,
      cost_children_over4: Costover,
      departure: Departure,
      introduction: Introduction,
      image: Image,
    });
    alert('Thêm Tour thành công!');
  }

  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup} position="fixed" background-color="rgba(0,0, 0,.4)">
      <DialogTitle>
        <div>Add New Tour</div>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" alignItems="center" justifyContent="space-between" mb={5}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="id" onChange={Update} type="text" placeholder="Enter Id" />
            <input id="name" onChange={Update1} type="text" placeholder="Enter Name" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="location" onChange={Update2} type="text" placeholder="Enter Location" />
            <input id="time" onChange={Update3} type="text" placeholder="Enter Time" />
            <input id="member" onChange={Update4} type="text" placeholder="Enter Members" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="cost" type="text" onChange={Update5} placeholder="Enter Cost" />
            <input id="type" type="text" onChange={Update6} placeholder="Enter Type" />
            <input id="vehicles" type="text" onChange={Update7} placeholder="Enter Vehicles" />
          </Stack>
          <input
            id="cost_children_under4"
            onChange={Update9}
            type="text"
            size="35"
            placeholder="Enter Cost_Children under 4 year old"
          />
          <input
            id="cost_children_over4"
            onChange={Update10}
            type="text"
            size="35"
            placeholder="Enter Cost_Children over 4 year old"
          />
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="departure" onChange={Update11} type="text" placeholder="Enter Departure" />
            <input id="introduction" type="text" onChange={Update12} placeholder="Enter Introduction" />
            <input id="duration" type="text" onChange={Update8} placeholder="Enter Duration" />
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <input id="image" onChange={Update13} type="text" size="35" placeholder="Enter Url Image tour" />
          </Stack>
          <input onClick={Set} type="submit" value="submit" />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
