import React from "react";
import { tasksData, statusIconsList } from "../../data/data";
import CardWrapper from "../CardWrapper/CardWrapper";

const cardWrapperStyles = {
  width: "350px",
  height: "87vh",
};

function TasksListView() {
  return (
    <CardWrapper styles={cardWrapperStyles}>
      <h4 className="tasks-list-headline">Your Tasks</h4>
      <div className="tasks-list">
        {tasksData.map(({ status, title }) => (
          <div className="task">
            <img
              src={statusIconsList[status]}
              alt={title}
              className="task__status-image"
            />
            <h5 className={`task__text ${status}`}>{title}</h5>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

export default TasksListView;
