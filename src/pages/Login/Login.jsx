/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [type, setType] = useState(true);
  return (
    <div className="max-w-[1200px] mx-auto px-2 md:px-0">
      <div className="flex flex-col justify-center items-center">
        <h2 className="my-5 text-2xl font-semibold">
          Login to your DailyHabits account
        </h2>
        <form className="flex flex-col justify-start items-start w-full md:w-[400px]">
          <div className="flex flex-col md:w-[400px] w-full">
            <label htmlFor="email" className="py-5">
              <span className="text-red-600">*</span> Email Address
            </label>
            <input
              className="outline-none border-2 px-3 py-1"
              type="email"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col md:w-[400px] w-full">
            <label htmlFor="Password" className="py-5">
              <span className="text-red-600">*</span> Password
            </label>
            <div className="relative">
              <input
                type={type ? "password" : "text"}
                className="outline-none border-2 px-3 py-1 w-full"
                name="Password"
                placeholder="Password"
              />
              <div className="absolute top-2 right-4 text-xl cursor-pointer">
                {type ? (
                  <FaEye onClick={() => setType(!type)}></FaEye>
                ) : (
                  <FaEyeSlash onClick={() => setType(!type)}></FaEyeSlash>
                )}
              </div>
            </div>
          </div>
          <input
            className="border w-[80%] mx-auto my-5 bg-black text-white py-2"
            type="submit"
            value="Login"
          />
        </form>
        <p>
          Don't Have an Account ?
          <span className="text-[#4CA7FF] font-medium">
            <Link to="/register">Please Register</Link>
          </span>
        </p>
        <p className="py-3">
          Forgot your password?{" "}
          <span className="text-[#4CA7FF]">Reset password</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
