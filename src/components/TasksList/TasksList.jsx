import React from "react";
import { tasksData } from "../../data/data";
import Task from "../Task/Task";

function TasksList() {
  const tasksList = tasksData.map((task, key) => (
    <Task index={key} {...task} />
  ));

  return <>{tasksList}</>;
}

export default TasksList;
