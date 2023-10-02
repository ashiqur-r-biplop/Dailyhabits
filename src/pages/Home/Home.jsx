import Creators from "../../Component/Home/Creators";
import GetStarted from "../../Component/Home/GetStarted";
import Gif from "../../Component/Home/Gif";
import Header from "../../Component/Home/Header";
import Reflect from "../../Component/Home/Reflect";
import Responsive from "../../Component/Home/Responsive";
import Streaks from "../../Component/Home/Streaks";
import Visualize from "../../Component/Home/Visualize ";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Gif></Gif>
      <Visualize></Visualize>
      <Streaks></Streaks>
      <Reflect></Reflect>
      <Responsive></Responsive>
      <Creators></Creators>
      <GetStarted></GetStarted>
    </>
  );
};

export default Home;
