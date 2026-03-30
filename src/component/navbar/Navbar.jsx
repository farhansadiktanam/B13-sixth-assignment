import React from "react";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="container w-281 mx-auto p-3">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <a className=" text-3xl font-bold bg-linear-to-r from-[#4F39F6] via-white-400 to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 menu-horizontal px-1">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <FiShoppingCart className="text-2xl mr-4 cursor-pointer" />
          <a href="#" className="mr-4">
            Login
          </a>
          <button
            class="px-6 py-2 text-white text-lg font-semibold rounded-full 
              bg-linear-to-r from-[#4F39F6]  to-[#9514FA] 
              
              transition-all duration-300 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
