import React from "react";
import TextWithDotList from "../TextWithDotList/TextWithDotList";

const textWithDotListStyles = {
  fontSize: "8px",
};

function Footer() {
  return (
    <div className="footer">
      <TextWithDotList
        texts={["Terms of service", "Privacy policy", "Copyright"]}
        styles={textWithDotListStyles}
      />
      <TextWithDotList
        texts={["nerds.family Version 1.2", "Last update 10/09/2022"]}
        styles={textWithDotListStyles}
      />
    </div>
  );
}

export default Footer;
