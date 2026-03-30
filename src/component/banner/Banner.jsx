import React from "react";
import heroImage from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen container mx-auto w-281 my-30">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={heroImage} />
        <div className="space-y-2">
          <a className="btn px-3 py-2 flex gap-1 bg-[#102681] w-70 rounded-full items-center bg-linear-to-r from-[#4F39F6] via-[#9514FA]  bg-clip-text text-transparent ">
            <FaCircle className="text-[#4F39F6]" /> New: AI-Powered Tools
            Available
          </a>
          <h1 className="text-6xl font-bold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6 text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex gap-3">
            <button
              className="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] cursor-pointer "
            >
              Explore Products
            </button>
            <button
              className="flex items-center gap-1 px-6 py-2 rounded-full text-purple-600 font-semibold 
                      border-2 border-purple-600 cursor-pointer"
            >
              <IoPlayOutline /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
