import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import TasksList from "../TasksList/TasksList";

const cardWrapperStyles = {
  width: "350px",
  height: "87vh",
};

function TasksListView() {
  return (
    <CardWrapper styles={cardWrapperStyles}>
      <h4 className="tasks-list-headline">Your Tasks</h4>
      <div className="tasks-list">
        <TasksList />
      </div>
    </CardWrapper>
  );
}

export default TasksListView;
