/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams, useRoutes } from "react-router-dom";
import logo from "/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { TbMoonOff } from "react-icons/tb";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const route = useLocation();
  const habits = route?.pathname.split("/")[1];
  const [theme, setTheme] = useState(false);
  const handleLogout = () => {
    logout()
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    window.addEventListener("load", handleToggle);
    return () => {
      window.removeEventListener("load", handleToggle);
    };
  }, []);
  const handleToggle = () => {
    const bodyElement = document.getElementsByTagName("body")[0];
    const currentTheme = bodyElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    const presentTheme = localStorage.getItem("theme");
    bodyElement.setAttribute("data-theme", presentTheme);
    setTheme(!theme);
  };
  return (
    <div className="py-3 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="lg:w-[200px] w-[180px]" src={logo} alt="" />
          </Link>

          <div className="flex justify-center items-center">
            {habits !== "habits" && (
              <Link to="/habits">
                <button className="text-gray-600 font-semibold ps-5">
                  Start Today
                </button>
              </Link>
            )}
            {habits == "habits" && (
              <>
                <button className="border border-[#8000f6] text-[#8000f6] px-2 py-1 rounded-md ml-3">
                  Upgrade to premium
                </button>
                <div className="ms-3">
                  {theme ? (
                    <BsFillMoonFill
                      onClick={handleToggle}
                      className="text-2xl cursor-pointer"
                    ></BsFillMoonFill>
                  ) : (
                    <TbMoonOff
                      onClick={handleToggle}
                      className="text-2xl cursor-pointer"
                    ></TbMoonOff>
                  )}
                </div>
              </>
            )}
            {!user ? (
              <>
                <Link to="/login">
                  <button className="text-gray-600 font-semibold ms-3">Login</button>
                </Link>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                      tabIndex={0}
                      className="cursor-pointer  flex items-center justify-center"
                    >
                      <label className="m-1 text-gray-600 font-semibold ps-5 cursor-pointer ">
                        {user?.email}
                      </label>
                      <AiOutlineArrowDown></AiOutlineArrowDown>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a>Download mobile app</a>
                      </li>
                      <li>
                        <a>Get Chrome extension</a>
                      </li>
                      <li>
                        <a>Request a feature</a>
                      </li>
                      <li>
                        <a>Contact support</a>
                      </li>
                      <li>
                        <a>Delete your account</a>
                      </li>
                      <li className="text-red-600" onClick={handleLogout}>
                        <a>Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
