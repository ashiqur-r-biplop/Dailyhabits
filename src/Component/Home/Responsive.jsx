/* eslint-disable react/no-unescaped-entities */
import responsiveimg from "/habit-img.png"
const Responsive = () => {
  return (
    <div className="px-2 md:px-0">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex md:flex-row flex-col-reverse justify-center items-center md:py-[100px] py-[40px]">
          <div>
            <img src={responsiveimg} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="md:w-[50%] mx-auto md:text-[32px] text-[25px]  font-semibold">
              Fully responsive on mobile.
            </h2>
            <p className="md:w-[50%] mx-auto py-3 md:text-justify">
              You might be at the gym finishing off your exercise habit. Mark it
              as done right there on your mobile. Or perhaps you had an epiphany
              and you want to make a note of it.
            </p>
            <p className="md:w-[50%] mx-auto md:text-justify py-3">
              Don't lose that thought. Easily access DailyHabits through your
              mobile browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsive;
