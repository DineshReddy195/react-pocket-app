import React, {  useEffect, useState } from "react";
import "./Content.css";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";

function Content() {
  const [send, setSend] = useState("");
  const [groupData, setGroupData] = useState([]);
  const { topic } = useParams();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d=new Date();
    const date=d.getDate();
    const month=months[d.getMonth()];
    const year=d.getFullYear();
    const hours=d.getHours();
    const minutes=d.getMinutes();
    const Meridiem= (hours > 0 && hours < 11) ? 'AM' : 'PM';
  const groupId = JSON.parse(localStorage.getItem("selectedGroup"))?.id;

  useEffect(() => {
    const storedData = localStorage.getItem(`groupData_${groupId}`);
    setGroupData(storedData ? JSON.parse(storedData) : []);
  }, [groupId]);

  const handleSend = () => {
    if (send.trim() === "") return;
    const newItem = {
      title: send,
      id: Date.now()
    };
    setGroupData(prevData => [...prevData, newItem]);
    setSend("");
  };

  return (
    <div className="content">
      <div className="task-header">
        <div className="avatar">
          <p>{topic[0]}</p>
        </div>
        <h2>{topic}</h2>
      </div>
      <div className="messages">
        {groupData.map(chat => (
          <div key={chat.id} className="task-body">
            <p>{chat.title}</p>
            <span><b>{date+' '+month+' '+year}</b></span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span><b>{hours+':'+minutes+' '+Meridiem}</b></span>
          </div>
        ))}
      </div>
      <div className="task-footer">
        <textarea
          placeholder="Enter your text here"
          value={send}
          cols="120"
          rows="10"
          onChange={e => setSend(e.target.value)}
          className="task-text"
        ></textarea>
        <button onClick={handleSend} disabled={!send} className="btn-send">
          <IoMdSend />
        </button>
      </div>
    </div>
  );
}

export default Content;
