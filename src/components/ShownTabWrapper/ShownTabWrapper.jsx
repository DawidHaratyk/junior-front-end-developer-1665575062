import React from "react";
import { useState } from "react";

function ShownTabWrapper() {
  const [currentTab, setCurrentTab] = useState("Business Context");

  return <div>{currentTab}</div>;
}

export default ShownTabWrapper;
