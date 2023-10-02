import { Link } from "react-router-dom";
import logo from "/logo.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { AiOutlineArrowDown } from "react-icons/ai";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="py-3 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="lg:w-[200px] w-[180px]" src={logo} alt="" />
          </Link>

          <div className="flex justify-center items-center">
            {!user ? (
              <Link to="/login">
                <button className="text-gray-600 font-semibold">Login</button>
              </Link>
            ) : (
              <div className="flex justify-center items-center">
                <Link to="/habits">
                  <button className="text-gray-600 font-semibold ps-5">
                    Start Today
                  </button>
                </Link>
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
                    <li onClick={handleLogout}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
