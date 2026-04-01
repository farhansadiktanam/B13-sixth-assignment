import React from "react";
import heroImage from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto gap-10 p-10">
        {/* Image */}
        <img
          src={heroImage}
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          alt="Hero"
        />

        {/* Content */}
        <div className="space-y-4 text-center lg:text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
      bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10"
          >
            <FaCircle className="text-[#4F39F6] text-xs" />
            <span className="text-sm font-medium text-purple-600">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Supercharge Your <br className="hidden sm:block" /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-[#627382] text-sm sm:text-base md:text-lg">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              className="px-6 py-3 text-white text-base sm:text-lg font-semibold rounded-full 
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full sm:w-auto"
            >
              Explore Products
            </button>

            <button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full 
        text-purple-600 font-semibold border-2 border-purple-600 w-full sm:w-auto"
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
