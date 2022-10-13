import React from "react";

function Tab({ title, icon, currentTab }) {
  const isButtonActive = currentTab.toLowerCase() === title.toLowerCase();

  return (
    <button className={`tabs__button ${isButtonActive && "tabs__active"}`}>
      <img src={icon} alt={title} className="tabs__button-image" />
      {title}
    </button>
  );
}

export default Tab;
