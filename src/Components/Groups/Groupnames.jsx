import React, { useContext } from "react";
import "./Groupnames.css";
import { useNavigate } from "react-router-dom";
import Context from "../Context/Context";

function Groupnames() {
  const navigate = useNavigate();
  const [newGroup, color] = useContext(Context);

  const handleClick = (item) => {
    navigate(`/rooms/${item.title}`);
  };

  return (
    <div className="groupnames">
      <div>
        {newGroup.map((item, index) => (
          <div
            className="new-group"
            key={index}
            id={index + 1}
            onClick={() => handleClick(item)}
          >
            <div
              className="avatar"
              style={{ backgroundColor: item.color || color }}
            >
              <p className="avatar-profile">{item.initial}</p>
            </div>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groupnames;
