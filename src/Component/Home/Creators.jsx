/* eslint-disable react/no-unescaped-entities */
import man from "/man-1.jpeg";
import man2 from "/man-2.jpeg";
const Creators = () => {
  return (
    <div className="bg-[#FAFAFA] py-[100px] px-2 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center md:text-6xl text-3xl pb-10 font-bold">Meet the creators 👋</h1>
        <div className="md:flex justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[150px]">
              <img className="w-full rounded-full my-5" src={man} alt="" />
            </div>
            <h2 className="text-2xl font-semibold py-3">Hey, I'm Preetam :D</h2>
            <p className="md:w-[60%] w-full  text-center">
              I love all things design and marketing. My life goal is to build
              great software businesses, help others build and earn financial
              autonomy, and at the end of the day lead a good and happy life.
            </p>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[150px]">
                <img className="w-full rounded-full my-5" src={man2} alt="" />
              </div>
              <h2 className="text-2xl font-semibold py-3">
                Hi, this is Sankalp :)
              </h2>
              <p className="md:w-[60%] w-full  text-center">
                I love using technology to enrich lives. Despite writing code
                for the past 6 years, I am always fascinated by the fact that a
                few lines of code can help reduce chaos in someone else's life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
