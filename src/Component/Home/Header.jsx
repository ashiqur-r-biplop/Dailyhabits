/* eslint-disable react/no-unescaped-entities */
import { BiSolidArrowToTop } from "react-icons/bi";
import StartButton from "../../Sheard/StartButton";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-2 md:px-0 text-center">
      <h2 className="md:text-5xl text-3xl font-bold">
        The Simplest Habit Tracker App on this Planet
      </h2>
      <p className="py-5 text-xl">
        Finally, a daily habit tracker that helps you do more, by doing less.
      </p>
      <StartButton></StartButton>
      <small className="pb-5 pt-2 text-gray-500">100% free forever</small>
      <button className="border border-orange-600 text-orange-600 rounded-lg flex items-center justify-center p-1 px-2">
        <p className="text-white bg-orange-600 pb-[10px] rounded-full px-[13px] font-bold text-2xl">
          p
        </p>
        <span>
          <span className="flex flex-col justify-start items-start px-4 relative">
            <small className="text-[10px] absolute -top-2">FEATURED ON</small>{" "}
            <span className="font-semibold ">Product Hunt</span>
          </span>
        </span>
        <span className="flex items-center justify-center flex-col">
          <span>
            <BiSolidArrowToTop></BiSolidArrowToTop>
          </span>{" "}
          <span className="text-[12px] font-semibold">187</span>
        </span>
      </button>
      <span className="py-3 text-[14px] text-gray-500">
        🎉 We were featured in ProductHunt's newsletter.
      </span>
    </div>
  );
};

export default Header;
