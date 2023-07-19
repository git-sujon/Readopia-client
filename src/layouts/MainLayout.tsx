import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10 py-10 md:py-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
