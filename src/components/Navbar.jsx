import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import logo2 from "../assets/logo2.webp";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("LogOut Successfull"))
      .catch((error) => {
        console.log("Error", error.message);
      });
  };
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Career</Link>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-color-70 text-base md:text-lg space-x-3"
          >
            {links}
          </ul>
        </div>
        <div className="h-11 rounded-full">
          <img className="h-full rounded-full" src={logo2} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-color-70 text-base md:text-lg space-x-3">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="font-semibold py-2 px-8 text-lg md:text-xl bg-color-40 text-white hover:bg-[#5A5959] transition duration-300"
            >
              LogOut
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="font-semibold py-2 px-8 text-lg md:text-xl bg-color-40 text-white hover:bg-[#5A5959] transition duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
