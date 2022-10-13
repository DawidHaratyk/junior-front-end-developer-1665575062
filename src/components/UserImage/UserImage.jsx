import React from "react";

function UserImage({ image, styles }) {
  return (
    <div className="user-image-container" style={styles}>
      <img src={image} alt="user" className="image" />
    </div>
  );
}

export default UserImage;
