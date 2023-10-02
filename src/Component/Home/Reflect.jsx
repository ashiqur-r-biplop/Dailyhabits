/* eslint-disable react/no-unescaped-entities */
import modal from "/modal-img-2.png";
const Reflect = () => {
  return (
    <div className="bg-slate-100 px-2 md:px-0">
      <div className="max-w-[1200px] mx-auto ">
        <div className="md:flex justify-center items-center md:py-[100px] py-[40px]">
          <div className="text-center md:text-left">
            <h2 className="md:w-[50%] md:text-[32px] text-[25px]  font-semibold">
              Make notes to reflect on your journey.
            </h2>
            <p className="md:w-[50%] md:text-justify py-2">
              No journey is complete without reflection, which promotes
              self-awareness and prompts you to evaluate your own progress, as
              well as areas where you need to improve.
            </p>
            <p className="md:w-[50%] md:text-justify py-2">
              Ultimately, you are the best judge of your own journey.
            </p>
          </div>
          <div>
            <img src={modal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflect;
