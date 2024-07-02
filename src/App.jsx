import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Lowbar from "./components/Lowbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-screen bg-black">
      <div className="flex w-full h-full ">
        <div className="w-[24%]">
          <div className="sticky top-0 left-0">
            <Sidebar />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="sticky top-0 right-0 left-1/4">
            <Navbar />
          </div>
          <div className="w-full bg-[#121212] rounded text-white my-2 h-full pb-6">
            <Outlet />
          </div>
        </div>
      </div>
      <Lowbar />
    </div>
  );
};

export default App;
