import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-6 md:p-10">
        <h2 className="font-semibold text-color-40 text-2xl md:text-4xl text-center">
          Login your account
        </h2>
        <hr className="mt-6 md:mt-8 border-t border-t-color-e7" />
        <form className="card-body">
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="py-4 text-white bg-color-40 font-semibold text-xl hover:bg-[#5A5959] transition duration-300">
              Login
            </button>
            <p className="mt-6 md:mt-8 text-base font-semibold text-color-70 text-center">
              Dont’t Have An Account ?{" "}
              <Link to={"/auth/register"}>
                <span className="text-transparent bg-gradient-to-r from-color-ff-0 to-color-f7-100 bg-clip-text hover:cursor-pointer ">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
