import React from "react";
import ShownTabWrapper from "../ShownTabWrapper/ShownTabWrapper";
import TasksListView from "../TasksListView/TasksListView";

function MainViewContent() {
  return (
    <div className="main-view">
      <TasksListView />
      <ShownTabWrapper />
    </div>
  );
}

export default MainViewContent;
