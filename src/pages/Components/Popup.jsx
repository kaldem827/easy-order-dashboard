import React from "react";
import { useGlobalContext } from "../../context/Context";

export const Popup = ({ header, text, type }) => {

    const {popupShowing,
    setPopupShowing} = useGlobalContext()
  return (
    <div
      className={`popup ${
        type === "success" ? "popup-success" : "popup-error"
      }  ${popupShowing ? "popup-showing" : ""}`}
    >
      <h1>{header}</h1>
      <p>{text}</p>
    </div>
  );
};
 