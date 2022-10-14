import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { statusIconsList } from "../../data/data";

const linkStyles = { textDecoration: "none" };

function Task({ setCurrentTaskIndex, index, title, status }) {
  const linkPath = status !== "unlocked" && `/${title.replaceAll(" ", "")}`;

  const handleSwitchTask = useCallback(() => {
    if (status !== "unlocked") {
      setCurrentTaskIndex(index);
    }
  }, [index, setCurrentTaskIndex, status]);

  return (
    <div className="task">
      <img
        src={statusIconsList[status]}
        alt={title}
        className="task__status-image"
      />
      <Link to={linkPath} onClick={handleSwitchTask} style={linkStyles}>
        <h5 className={`task__text ${status}`}>{title}</h5>
      </Link>
    </div>
  );
}

export default Task;
