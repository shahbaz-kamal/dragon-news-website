import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log("ERROR", error));
  }, []);
  const parameter = useParams();
  //   console.log(parameter);
  return (
    <div>
      <h2 className="text-left font-semibold text-color-40 text-lg md:text-xl mb-4 md:mb-5">
        All Caterogy
      </h2>

      <div className="flex flex-row md:flex-col gap-2 flex-wrap ">
        {categories.map((category) => (
          <NavLink
            to={`category/${category.category_id}`}
            key={category.category_id}
            className={({ isActive }) =>
              isActive
                ? "bg-color-e7 font-semibold text-color-40 text-lg md:text-xl p-4"
                : "bg-white font-medium text-lg md:text-xl text-color-9f p-4"
            }
          >
            {category.category_name}
          </NavLink>
        ))}
        {/* className="bg-color-e7 py-4 text-lg md:text-xl" */}
      </div>
    </div>
  );
};

export default LeftNavbar;
