import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Lowbar from "./components/Lowbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-w-[600px] min-h-[100vh]  max-h-[100vh] min-h-[300px] md:overflow-x-hidden  max-h-[900px] h-screen w-full overflow-y-scroll min-w-[850px] ">
      <div className="flex w-full flex-grow">
        <div className="min-w-[346px] w-[24%] h-[40%] max-h-[90vh] min-h-[700px]  p-2 overflow-y-scroll">
          {/* <div className="fixed top-0 left-0 w-[346px] bg-black z-20 ">
            <Sidebar />   max-h-[715px] min-w-[343px]
          </div> */}
          <Sidebar />
        </div>
        <div className="w-3/4 min-w-[200px] flex flex-col flex-grow  pt-2 mr-2 max-h-[90vh] h-full min-h-[700px]">
          {/* <div className="fixed top-0 right-0 left-[346px] bg-black z-20 ">
            <Navbar />
          </div> */}
          <div className=" w-full h-[10%]">
            <Navbar />
          </div>
          {/* <div className="w-full bg-[#121212] rounded text-white my-2 h-full pb-16 min-w-[400px] "> */}
          <div className="w-full bg-[#121212] rounded text-white  gap-y-2 h-full pb-10  flex flex-col  overflow-y-scroll ">
            {/* <div className="min-w-[400px] "> */}
            <Outlet />
            {/* </div> */}
            <Footer />
          </div>
        </div>
      </div>
      {/* <div className="bg-black fixed bottom-0 right-0 left-0 px-2 py-1.5 z-30">
        <Lowbar />
      </div> */}
      <div className="m-2">
        <Lowbar />
      </div>
    </div>
  );
};

export default App;
