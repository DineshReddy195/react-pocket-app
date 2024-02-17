import React, { useState, useEffect } from "react";
import "./Groups.css";
import Modal from "react-responsive-modal";
import Groupnames from "./Groupnames";
import Context from "../Context/Context";

function Groups() {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [initial, setInitial] = useState("");
  const [newGroup, setNewGroup] = useState([]);
  const [color, setColor] = useState("");

  const colors=['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF']
  useEffect(() => {
    const storedData = localStorage.getItem("myGroups");
    if (storedData) {
      setNewGroup(JSON.parse(storedData));
    }
  }, []);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const addGroup = () => {
    const newGroupData = {
      title: profile,
      color: color,
      initial: initial
    };
    setOpen(false);
    setNewGroup(prevGroups => {
      const updatedGroups = [...prevGroups, newGroupData];
      localStorage.setItem("myGroups", JSON.stringify(updatedGroups));
      return updatedGroups;
    });
  };

  const handleColor = (colour) => {
    setColor(colour);
  };

  const handleChange = e => {
    const value = e.target.value;
    setProfile(value);
    setInitial(generateInitial(value));
  };

  const generateInitial = (profile) => {
    return profile.split(' ').map((word) => word.charAt(0)).join('').slice(0, 2).toUpperCase();
  };

  return (
    <div className="groups">
      <h1 className="title">Pocket Notes</h1>
      <button className="add" onClick={openModal}>+</button>
      <Modal open={open} center onClose={closeModal} classNames='modal'>
        <h2>Create New Group</h2>
        <span className="label1">Group Name</span>&nbsp;&nbsp;
        <input
          type="text"
          name="group-name"
          placeholder="Enter group name"
          className="text"
          onChange={handleChange}
        />
        <br />
        <br />
        <span>Choose Color</span> &nbsp; &nbsp;
        {colors.map((currColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: currColor }}
            className={color === currColor ? "colors active" : "colors"}
            onClick={() => setColor(currColor)}
          ></button>
        ))}
        <br />
        <br />
        <button className="create" onClick={addGroup}>Create</button>
      </Modal>
      <div className="groups-name">
        <Context.Provider value={[newGroup, color]}>
          <Groupnames />
        </Context.Provider>
      </div>
    </div>
  );
}

export default Groups;
