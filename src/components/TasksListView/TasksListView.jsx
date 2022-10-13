import React from "react";
import { tasksData, statusIconsList } from "../../data/data";

function TasksListView() {
  return (
    <div className="tasks-list-container">
      <h4 className="tasks-list-container__headline">Your Tasks</h4>
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
    </div>
  );
}

export default TasksListView;
