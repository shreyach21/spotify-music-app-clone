import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Lowbar from "./components/Lowbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-screen bg-black overflow-hidden">
      <div className="flex w-full h-full ">
        <div className="w-[24%]">
          <div className="fixed top-0 left-0 w-[24%] bg-black">
            <Sidebar />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="fixed top-0 right-0 left-[24%] bg-black z-20">
            <Navbar />
          </div>
          <div className="w-full bg-[#121212] rounded text-white my-2 h-full pb-16 ">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
      <div className="bg-black fixed bottom-0 right-0 left-0 px-2 py-2">
        <Lowbar />
      </div>
    </div>
  );
};

export default App;
