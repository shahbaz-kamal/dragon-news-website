import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center mt-8 md:mt-10">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-6 md:p-10">
        <h2 className="font-semibold text-color-40 text-2xl md:text-4xl text-center">
          Register your account
        </h2>
        <hr className="mt-6 md:mt-8 border-t border-t-color-e7" />
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name Here"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Paste your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {/* terms */}
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-[10px]">
              <input type="checkbox" className="checkbox" />
              <span className="label-text text-color-70 text-base">
                Accept <span className="font-semibold">Term & Conditions</span>
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-4 text-white bg-color-40 font-semibold text-xl hover:bg-[#5A5959] transition duration-300">
              Register
            </button>

            <p className="mt-6 md:mt-8 text-base font-semibold text-color-70 text-center">
              Already Have An Account ?{" "}
              <Link to={"/auth/login"}>
                <span className="text-transparent bg-gradient-to-r from-color-ff-0 to-color-f7-100 bg-clip-text hover:cursor-pointer ">
                  Log In
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;