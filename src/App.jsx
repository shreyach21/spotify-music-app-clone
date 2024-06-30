import React from "react";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Lowbar from "./components/Lowbar";

const App = () => {
  return (
    <div className="min-w-[100vw] min-h-screen bg-black">
      {/* <Signup /> */}
      {/* <Signin /> */}
      <div className="flex w-full h-full">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <Navbar />
          <Body />
        </div>
      </div>
      <Lowbar />
    </div>
  );
};

export default App;
