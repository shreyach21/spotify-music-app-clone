import React from "react";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* <Signup /> */}
      {/* <Signin /> */}
      <Sidebar />
    </div>
  );
};

export default App;
