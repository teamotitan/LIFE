import React from "react";
import "./Announcement.css";

const Announcement = ({ name, description, date, time, image }) => {
  return (
    <div className="announcement">
      <div className="announcement-top">
        <div className="image">{image}</div>
        <h2>{name}</h2>
      </div>
      <hr/>
      <div className="announcement-description">{description}</div>
      <hr />
      <div className="announcement-bottom">
        <p>On {date}</p>
        <p>At {time}</p>
      </div>
    </div>
  );
};

export default Announcement;
