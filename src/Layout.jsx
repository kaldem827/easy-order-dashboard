import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./pages/Components/Navbar";

export const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
