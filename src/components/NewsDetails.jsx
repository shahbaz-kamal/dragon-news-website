import React from "react";
import Header from "./Header";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import { Outlet, useLoaderData } from "react-router-dom";
import RightNavbar from "./RightNavbar";
import DetailsCard from "./DetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  return (
    <div className="max-w-[1140px] mx-auto px-2 md:px-0">
      <header className="mt-6 md:mt-10 mb-6 md:mb-8">
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h1 className="font-semibold text-lg md:text-xl mb-4 md:mb-5">
            Dragon News
          </h1>
          <DetailsCard news={news}></DetailsCard>
        </section>
        <aside className="col-span-3 ">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
