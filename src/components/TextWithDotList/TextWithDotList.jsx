import React from "react";

function TextWithDotList({ texts, styles }) {
  const textWithDotList = texts.map((text, key) => {
    const isIndexLast = key === texts.length - 1;

    return (
      <span className="text" style={styles}>
        {text}
        {!isIndexLast && <span className="text__dot">•</span>}
      </span>
    );
  });

  return <span>{textWithDotList}</span>;
}

export default TextWithDotList;
