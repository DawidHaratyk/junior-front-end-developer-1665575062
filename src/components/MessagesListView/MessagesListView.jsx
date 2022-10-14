import React from "react";
import { useTasks } from "../../contexts/TasksContext";
import { tasksData } from "../../data/data";
import MessageBox from "../MessageBox/MessageBox";

function MessagesListView() {
  const { currentTaskIndex } = useTasks();

  const messagesList = tasksData[currentTaskIndex].businessContexts.map(
    (task, key) => <MessageBox businessContextIndex={key} {...task} />
  );

  return <div className="messages-list">{messagesList}</div>;
}

export default MessagesListView;
