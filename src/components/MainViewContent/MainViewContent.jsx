import React, { useState } from "react";
import ShownTabWrapper from "../ShownTabWrapper/ShownTabWrapper";
import TasksListView from "../TasksListView/TasksListView";
import { tasksData } from "../../data/data";

function MainViewContent() {
  const activeTaskIndex = tasksData.findIndex(
    (task) => task.status === "active"
  );

  const [currentTaskIndex, setCurrentTaskIndex] = useState(activeTaskIndex);

  return (
    <div className="main-view">
      <TasksListView />
      <ShownTabWrapper
        currentTaskIndex={currentTaskIndex}
        setCurrentTaskIndex={setCurrentTaskIndex}
      />
    </div>
  );
}

export default MainViewContent;
