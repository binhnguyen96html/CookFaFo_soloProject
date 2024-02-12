import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="p-8 mx-auto mt-20">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
