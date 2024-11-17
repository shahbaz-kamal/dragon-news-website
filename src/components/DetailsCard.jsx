import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailsCard = ({ news }) => {
  const { image_url, title, details, category_id } = news;
  return (
    <div className="p-6 md:p-8 rounded-md border border-color-e7">
      <div className="mb-4 md:mb-5 w-full">
        <img
          className="rounded-md w-full object-cover"
          src={image_url}
          alt=""
        />
      </div>
      <h2 className="font-bold text-xl md:text-2xl text-color-40 mb-2 md:mb-3">
        {title}
      </h2>
      <p className="text-color-70 text-base mb-5 md:mb-8">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="inline-flex items-center gap-2 text-white bg-[#D72050] py-[9px] px-6 "
      >
        {" "}
        <FaArrowLeft></FaArrowLeft> <span>All news in this category</span>
      </Link>
    </div>
  );
};

export default DetailsCard;

// {
//     "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "01",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 488,
//     "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
//     "author": {
//         "name": "Jimmy Dane",
//         "published_date": "2022-08-24 17:27:34",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//     "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//     "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
// }
