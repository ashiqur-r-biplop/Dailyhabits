import { Link } from "react-router-dom";

const StartButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <Link to="habits">
      <button
        onClick={scrollToTop}
        className="bg-black text-white p-3 rounded font-medium mt-3"
      >
        ✅&nbsp;Start DailyHabits today
      </button>
    </Link>
  );
};

export default StartButton;
