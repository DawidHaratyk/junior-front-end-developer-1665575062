import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

const messageBoxStyles = {
  marginBottom: "8px",
};

function MessageBox({ author, created_at, title, content, status }) {
  switch (status) {
    case "new":
      return (
        <div className="message message__shadow-light">
          <div className="message__author-container">
            <span className="message__text message__status">new</span>
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at}
            </span>
          </div>
          <h5 className="message__title message__active">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      );
    case "current":
      return (
        <div className="message message__shadow">
          <div className="message__author-container">
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at}
            </span>
          </div>
          <h5 className="message__title">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      );
    case "old":
      return (
        <div className="message message__no-background">
          <div className="message__author-container">
            <span className="message__text">
              {author}
              <span className="message__text-dot">•</span>
              {created_at}
            </span>
          </div>
          <h5 className="message__title">{title}</h5>
          <p className="message__description">{content[0]}</p>
        </div>
      );
    default:
      console.log("The status is incorrect");
  }
}

export default MessageBox;
