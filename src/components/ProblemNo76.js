import React from "react";

const StarPattern = () => {
  const drawPattern = () => {
    let rows = 5;
    console.log(rows);
    let pattern = [];
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "X";
      }
      pattern.push(row);
    }

    for (let i = rows - 1; i >= 1; i--) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += "X";
      }
      pattern.push(row);
    }

    return pattern;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {drawPattern().map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  );
};

export default StarPattern;
