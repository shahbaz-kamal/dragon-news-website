import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="bg-color-f3 px-4 py-4 flex gap-5 mb-5 md:mb-8">
      <p className="bg-color-d7 text-white py-2 px-5"> Latest</p>
      <Marquee className="space-x-10 " pauseOnHover>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          doloremque!
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          doloremque!
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          doloremque!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
