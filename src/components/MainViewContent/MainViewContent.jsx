import React from "react";
import { TasksProvider } from "../../contexts/TasksContext";
import ShownTabWrapper from "../ShownTabWrapper/ShownTabWrapper";
import TasksListView from "../TasksListView/TasksListView";

function MainViewContent() {
  return (
    <TasksProvider>
      <div className="main-view">
        <TasksListView />
        <ShownTabWrapper />
      </div>
    </TasksProvider>
  );
}

export default MainViewContent;
