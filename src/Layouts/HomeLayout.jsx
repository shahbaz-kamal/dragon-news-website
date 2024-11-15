import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/latestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LeftNavbar";
import RightNavbar from "../components/RightNavbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="max-w-[1140px] mx-auto mt-8 px-2 md:px-0">
        <LatestNews></LatestNews>
      </section>
      <nav className="max-w-[1140px] mx-auto px-2 md:px-0">
        <Navbar></Navbar>
      </nav>
      <main className="md:grid grid-cols-12 md:max-w-[1140px] mx-auto px-2 md:px-0 mt-12 md:mt-14 gap-6">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
