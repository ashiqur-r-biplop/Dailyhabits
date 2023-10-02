import logo from "/logo.png";
const Navbar = () => {
  return (
    <div className="py-3 px-2 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img className="lg:w-[200px] w-[180px]" src={logo} alt="" />
          </div>

          <div className="flex justify-center items-center">
            <button className="text-gray-600 font-semibold">Login</button>
            <button className="text-gray-600 font-semibold ps-5">
              Start Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
