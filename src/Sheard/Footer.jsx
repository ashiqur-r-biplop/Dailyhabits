import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-[800px] mx-auto px-2 md:px-0">
        <div className="py-10">
          <div className="md:flex justify-center items-center ">
            <div className="flex flex-col justify-between items-start">
              <div>
                <h4 className="text-xl font-medium">
                  Take Charge Of Your Life
                </h4>
                <p className="w-[50%]">
                  <Link to="/" className="">
                    Try DailyHabits: A Simple Habit Tracker App Guide: How to
                    Build Good Habits in 2023
                  </Link>
                </p>
              </div>
              <div>
                <h4 className="text-xl font-medium">Best Apps</h4>
                <p className="text-gray-400">Best Habit Tracking Apps</p>
                <p className="text-gray-400">
                  Best Habit Tracking Apps for iPad
                </p>
                <p className="text-gray-400">
                  Best Habit Tracking Apps for Mac
                </p>
                <p className="text-gray-400">
                  Best Habit Tracking Apps for Apple Watch
                </p>
                <p className="text-gray-400">
                  Best Habit Tracking Apps for Android
                </p>
                <p className="text-gray-400">
                  Best Habit Tracking Apps for iPhone
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium">Apps</h4>
              {[
                "Forfeit",
                "Habitica",
                "Momentum",
                "Productive",
                "stickK",
                "Habitshare",
                "Streaks",
                "HabitBull",
                "Strides",
                "Coach.me",
                "Habitify",
                "HabitHub",
                "Loop",
                "Everyday",
              ].map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-400">
            © copyright dailyhabits.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
