import React from "react";
import { tasksData } from "../../data/data";
import image from "../../assets/user2.png";
import UserImage from "../UserImage/UserImage";

function MessageContentView({ currentTaskIndex }) {
  const activeBusinessContextIndex = tasksData[
    currentTaskIndex
  ].businessContexts.findIndex((task) => task.status === "current");

  const { title, author, created_at, content, status } =
    tasksData[currentTaskIndex].businessContexts[
      activeBusinessContextIndex !== -1 ? activeBusinessContextIndex : 0
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
              {created_at.getDate()}
              {/* improve date */}
              <span className="content__text-dot">•</span>
              11:20
            </span>
          </div>
          <p className="content__description">{content[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageContentView;
