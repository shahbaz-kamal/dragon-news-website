import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg md:text-xl text-color-40 mb-4 md:mb-5">
        Find Us On
      </h1>
      <div className="join join-vertical flex *:bg-white *:border *:border-color-e7 *:p-4 *:text-left">
        <button className=" join-item flex gap-2 items-center hover:bg-[#E8E8E8] transition duration-300">
          <FaFacebook color="#1877F2"></FaFacebook>
          <span className="font-medium text-sm md:text-base text-color-70">
            Facebook
          </span>
        </button>
        <button className=" join-item flex gap-2 items-center hover:bg-[#E8E8E8] transition duration-300">
          {" "}
          <FaInstagram color="#E1306C"></FaInstagram>
          <span className="font-medium text-sm md:text-base text-color-70">
            Instagram
          </span>
        </button>
        <button className=" join-item flex gap-2 items-center hover:bg-[#E8E8E8] transition duration-300">
          {" "}
          <FaTwitter color="#1DA1F2"></FaTwitter>
          <span className="font-medium text-sm md:text-base text-color-70">
            Twitter
          </span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
