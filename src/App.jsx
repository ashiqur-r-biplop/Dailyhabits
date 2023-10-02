import Footer from "./Sheard/Footer";
import Navbar from "./Sheard/Navbar";

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar></Navbar>
        <div className="md:min-h-[calc(100vh-73px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
