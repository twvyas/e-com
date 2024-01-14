import Footer from "./Footer";
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MasterLayout;
