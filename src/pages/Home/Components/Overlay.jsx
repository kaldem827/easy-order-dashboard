import React, { useState } from "react";
import { useGlobalContext } from "../../../context/Context";

export const Overlay = ({ children }) => {
  const { overlayShowing, setOverlayShowing } = useGlobalContext();
  console.log(overlayShowing);
  return (
    <div
      className={`overlay ${overlayShowing ? "" : "hide"}`}
      onClick={() => setOverlayShowing(false)}
    >
      {children}
    </div>
  );
};
