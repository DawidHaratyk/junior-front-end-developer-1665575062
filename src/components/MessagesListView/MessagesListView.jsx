import React from "react";
import { tasksData } from "../../data/data";
import MessageBox from "../MessageBox/MessageBox";

function MessagesListView({ currentTaskIndex, setCurrentTaskIndex }) {
  const messagesList = tasksData[currentTaskIndex].businessContexts.map(
    (task) => <MessageBox {...task} />
  );

  return <div className="messages-list">{messagesList}</div>;
}

export default MessagesListView;
