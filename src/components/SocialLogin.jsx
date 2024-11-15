import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg md:text-xl text-color-40 mb-5">
        Login With
      </h2>
      <div className="flex flex-col *:w-full space-y-2 *:px-1 lg:*:px-0">
        <button className="text-color-google rounded-md border border-color-google py-3 flex items-center justify-center gap-2 hover:bg-[#E8E8E8]  transition duration-300">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="text-color-github rounded-md border border-color-github py-3 flex items-center justify-center gap-2 hover:bg-[#E8E8E8] transition duration-300">
          <FaGithub></FaGithub> Login With github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
