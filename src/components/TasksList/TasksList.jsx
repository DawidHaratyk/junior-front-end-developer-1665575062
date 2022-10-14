import React from "react";
import { tasksData } from "../../data/data";
import Task from "../Task/Task";

function TasksList({ setCurrentTaskIndex }) {
  const tasksList = tasksData.map((task, key) => (
    <Task setCurrentTaskIndex={setCurrentTaskIndex} index={key} {...task} />
  ));

  return <>{tasksList}</>;
}

export default TasksList;
