import React from "react";

function CardWrapper({ children, styles }) {
  return (
    <div className="card-wrapper" style={styles}>
      {children}
    </div>
  );
}

export default CardWrapper;
