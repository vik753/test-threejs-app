import React from "react";

const UuidLabel = ({uuid, name, uuidLabels, deleteFigureHandler}) => {
  return (
    <div
      key={uuid}
      id={uuid}
      style={{ display: "inline-flex", margin: "0 4px 4px" }}
    >
        <span>
          {Object.keys(uuidLabels).length + 1}. {name}
        </span>
      <button
        style={{ marginLeft: "4px", cursor: "pointer" }}
        onClick={() => deleteFigureHandler(uuid)}
      >
        x
      </button>
    </div>
  );
};

export default UuidLabel;