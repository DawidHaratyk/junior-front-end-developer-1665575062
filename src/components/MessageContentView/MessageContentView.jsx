import React from "react";
import { tasksData } from "../../data/data";
import image from "../../assets/user2.png";
import UserImage from "../UserImage/UserImage";
import { useTasks } from "../../contexts/TasksContext";
import TextWithDotList from "../TextWithDotList/TextWithDotList";

function MessageContentView() {
  const { currentTaskIndex } = useTasks();

  const activeBusinessContextIndex = tasksData[
    currentTaskIndex
  ].businessContexts.findIndex((task) => task.status === "current");

  const { title, author, created_at, content } =
    tasksData[currentTaskIndex].businessContexts[
      activeBusinessContextIndex !== -1 ? activeBusinessContextIndex : 1
    ];

  const texts = [
    `${
      created_at.toDateString() === new Date().toDateString() ? "Today, " : ""
    } ${created_at.getDate()}th ${created_at.toLocaleString("en-GB", {
      month: "long",
    })}`,
    `${created_at.getHours()}:${created_at.getMinutes()}`,
  ];

  return (
    <div className="message-content">
      <h2 className="message-content__headline">{title}</h2>
      <div className="content">
        <div className="content__image-container">
          <UserImage image={image} />
        </div>
        <div>
          <div className="content__info">
            <span className="content__headline">{author}</span>
            <span className="content__text">
              <span className="content__text-dot">•</span>
              <TextWithDotList texts={texts} />
            </span>
          </div>
          <p className="content__description">{content[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageContentView;
