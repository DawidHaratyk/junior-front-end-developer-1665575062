import React from "react";
import { useTasks } from "../../contexts/TasksContext";
import TextWithDotList from "../TextWithDotList/TextWithDotList";

function MessageBox({
  businessContextIndex,
  author,
  created_at,
  title,
  content,
  status,
}) {
  const { tasks, setTasks, currentTaskIndex } = useTasks();

  const handleSwitchMessage = (businessContextIndex) => {
    const currentBusinessContexts = tasks[currentTaskIndex].businessContexts;

    currentBusinessContexts.forEach((businessContext) => {
      if (businessContext.status === "current") {
        businessContext.status = "old";
      }
    });

    currentBusinessContexts[businessContextIndex].status = "current";
    setTasks((oldTasks) => [...oldTasks]);
  };

  const isNewMessage = status === "new";
  const isCurrentMessage = status === "current";
  const isOldMessage = status === "old";

  // make a hook and put there the variables etc.

  return (
    <div
      className={`message message__${`${isNewMessage ? "shadow-light" : ""}${
        isCurrentMessage ? "shadow" : ""
      }${isOldMessage ? "no-background" : ""}`}`}
      onClick={() => handleSwitchMessage(businessContextIndex)}
    >
      <div className="message__author-container">
        {isNewMessage && (
          <span className="message__text message__status">new</span>
        )}
        <TextWithDotList
          texts={[
            author,
            `${created_at.toLocaleString("en-GB", {
              month: "short",
            })} ${created_at.getDate()}`,
          ]}
        />
      </div>
      <h5 className={`message__title ${isNewMessage && "message__active"}`}>
        {title}
      </h5>
      <p className="message__description">{content[0]}</p>
    </div>
  );
}

export default MessageBox;
