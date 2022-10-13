import React from "react";
import { tasksData } from "../../data/data";
import image from "../../assets/user2.png";
import UserImage from "../UserImage/UserImage";

function MessageContentView({ currentTaskIndex }) {
  console.log(tasksData[currentTaskIndex].businessContexts);
  // const {} = tasksData[currentTaskIndex].businessContexts

  return (
    <div className="message-content">
      <h2 className="message-content__headline">
        Application has been accepted 🎉 🙌
      </h2>
      <div className="content">
        <div className="content__image-container">
          <UserImage image={image} />
        </div>
        <div>
          <div className="content__info">
            <span className="content__headline">Kirsten Aniston</span>
            <span className="content__text">
              <span className="content__text-dot">•</span>
              Today, 17th December
              <span className="content__text-dot">•</span>
              11:20
            </span>
          </div>
          <p className="content__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            soluta suscipit laboriosam rem doloribus officiis aliquid
            laudantium? Voluptatem, illo a dignissimos quam similique obcaecati
            totam distinctio nulla et voluptatibus in?Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Odio non ex dolores in quae
            distinctio cumque veniam quibusdam soluta consectetur, voluptatum
            ipsa sapiente temporibus, eum quis ipsum ad corrupti recusandae!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageContentView;
