import React from "react";
import "./Announcements.css";
import { details } from "../../assets/text";
import Announcement from "../Announcement/Announcement";

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h2 className="announcements-title">Announcements</h2>
      <hr/>
      <div className="announcements-list">
        {details.map((item) => {
          return (<Announcement
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            date={item.date}
            time={item.time}
          />);
        })}
      </div>
    </div>
  );
};

export default Announcements;
