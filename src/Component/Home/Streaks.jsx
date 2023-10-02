/* eslint-disable react/no-unescaped-entities */
import modal from "/modal-img.png";
const Streaks = () => {
  return (
    <div className="px-2 md:px-0">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center md:py-[100px] py-[40px]">
          <div>
            <img src={modal} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="md:w-[50%] mx-auto md:text-[32px] text-[25px]  font-semibold">
              Set flexible goals instead of streaks.
            </h2>
            <p className="md:w-[50%] mx-auto py-3 md:text-justify">
              Streaks break, because life happens. But don't let that stop your
              progress.
            </p>
            <p className="md:w-[50%] mx-auto md:text-justify py-3">
              Goals are based on flexible consistency, which makes it okay to
              fail sometimes. It's more important that you continue doing your
              habit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streaks;
