import React from "react";

export const Card = ({ children, width = "400px", height }) => {
  return (
    <div
      className="card"
      style={{ width: width, height: height ? height : "200px" }}
    >
      {children}
    </div>
  );
};
