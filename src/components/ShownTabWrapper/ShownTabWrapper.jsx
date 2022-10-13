import React from "react";
import { useState } from "react";
import tabIcon from "../../assets/tab.png";
import CardWrapper from "../CardWrapper/CardWrapper";
import MessageContentView from "../MessageContentView/MessageContentView";
import MessagesListView from "../MessagesListView/MessagesListView";
import Tab from "../Tab/Tab";

const shownTabWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "16px",
  width: "100%",
};

function ShownTabWrapper({ currentTaskIndex, setCurrentTaskIndex }) {
  const [currentTab, setCurrentTab] = useState("Business Context");

  return (
    <CardWrapper styles={shownTabWrapperStyles}>
      <div className="tabs">
        <Tab title={currentTab} icon={tabIcon} currentTab={currentTab} />
      </div>
      <section className="tab-content">
        <MessagesListView
          currentTaskIndex={currentTaskIndex}
          setCurrentTaskIndex={setCurrentTaskIndex}
        />
        <MessageContentView currentTaskIndex={currentTaskIndex} />
      </section>
    </CardWrapper>
  );
}

export default ShownTabWrapper;
