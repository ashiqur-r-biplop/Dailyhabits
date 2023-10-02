import StartButton from "../../Sheard/StartButton";

/* eslint-disable react/no-unescaped-entities */
const GetStarted = () => {
  return (
    <div className="py-[100px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl font-bold py-5">
          Get started for the rest of your life, today.
        </h1>
        <p className="py-5 text-xl md:w-[40%] text-center ">
          Our mission in life is to help others achieve their full potential.
          That's why DailyHabits is a 100% free to use.
        </p>
        <StartButton></StartButton>
      </div>
    </div>
  );
};

export default GetStarted;
