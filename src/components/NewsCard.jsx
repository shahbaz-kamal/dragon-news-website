import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const NewsCard = ({ singleNews }) => {
  console.log(singleNews);
  return (
    <div className="border border-color-e7 rounded-md pb-4 md:pb-5">
      {/* author info */}
      <div className="flex justify-between items-center bg-color-e7 px-5 py-2 mb-3">
        <div className="flex items-center gap-2 ">
          <div className="w-10 h-10">
            <img
              className="w-full h-full object-cover rounded-full"
              src={singleNews.author.img}
              alt=""
            />
          </div>
          <div className="text-left">
            <p className="font-semibold text-color-40 text--base">
              {singleNews.author.name}
            </p>
            <p className="text-sm text-color-70">
              {singleNews.author.published_date.slice(0, 10)}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <CiBookmark className="w-6 h-6"></CiBookmark>
          <CiShare2 className="w-6 h-6"></CiShare2>
        </div>
      </div>

      <h2 className="text-left font-bold text-lg md:text-xl text-color-40 mb-4 md:mb-5 px-4">
        {singleNews.title}
      </h2>

      <div className="px-4 mb-6 md:mb-8">
        <img className="rounded-md" src={singleNews.image_url} alt="" />
      </div>
      <p className="px-4 text-sm md:text-base text-color-70 mb-4 md:mb-5">
        {singleNews.details.slice(0, 260)} ...{" "}
        <span className="text-semibold text-transparent bg-gradient-to-r from-color-ff-0 to-color-f7-100 bg-clip-text">
          Read More
        </span>
      </p>
      <div className="px-4 mb-4 md:mb-5">
        <hr className="border-t border-t-color-e7" />
      </div>

      <div className="px-4 flex justify-between">
        <div className="flex items-center gap-2">
          <ReactStars
            count={5}
            value={singleNews.rating.number} // Pass the dynamic rating here
            size={24}
            isHalf={true} // Enable half-star support
            activeColor="#FF8C47"
            edit={false} // Makes it read-only
          />
          <p className="font-medium text-base text-color-70">
            {singleNews.rating.number}
          </p>
        </div>
        <div className="flex items-center gap-[10px] text-color-70">
          <FaEye></FaEye>
          <p>{singleNews.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
