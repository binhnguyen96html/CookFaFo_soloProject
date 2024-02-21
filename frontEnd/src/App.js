import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="p-8 mx-auto mt-16">
        <Outlet />
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
};

export default App;
