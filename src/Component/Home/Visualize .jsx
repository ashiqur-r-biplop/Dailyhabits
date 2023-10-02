/* eslint-disable react/no-unescaped-entities */
import img_1 from "/img-1.png";
const Visualize = () => {
  return (
    <div className="bg-slate-100 px-2 md:px-0">
      <div className="max-w-[1200px] mx-auto ">
        <div className="md:flex justify-center items-center md:py-[100px] py-[40px]">
          <div className="text-center md:text-left">
            <h2 className="md:w-[50%] md:text-[32px] text-[25px]  font-semibold">
              Visualize your entire month at a glance.
            </h2>
            <p className="md:w-[50%] md:text-justify">
              With a simple calendar view, you can see your activity for the
              entire month to see how you're doing and which areas you might
              need to focus on.
            </p>
          </div>
          <div>
            <img src={img_1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visualize;
