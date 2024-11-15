import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-color-f3">
      <header className="pt-3 max-w-[1140px] mx-auto px-2 md:px-0">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
