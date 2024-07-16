import React from "react";
import "./TaskList.css";
import { tasks } from "../../assets/text";
import Task from "../Task/Task";

const TaskList = () => {
  return (
    <div className="TaskList-container">
      <h2 className="TaskList-title"> Pending Tasks</h2>
      <hr />
      <div className="TaskList">
        {tasks.map((item) => {
          return <Task key={item.id} challenge={item.challenge} days={item.days} image={item.image} />;
        })}
      </div>
    </div>
  );
};

export default TaskList;
