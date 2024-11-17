import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const DragonNewsHome = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl text-color-40 text-left mb-4 md:mb-6">
        Dragon News Home
      </h2>
      <p className="text-color-9f text-sm md:text-base text-left mb-5 md:mb-6">
        {news.length} news found in this category
      </p>
      <div className="space-y-6 md:space-y-8 ">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default DragonNewsHome;
