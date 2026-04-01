import React from "react";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4">
      <div className="navbar shadow-sm">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
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

          {/* Logo */}
          <a className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        {/* CENTER (Desktop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">
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

        {/* RIGHT */}
        <div className="navbar-end gap-2 sm:gap-4">
          <FiShoppingCart className="text-xl sm:text-2xl cursor-pointer" />

          <a href="#" className="hidden sm:block">
            Login
          </a>

          <button
            className="px-4 sm:px-6 py-2 text-white text-sm sm:text-lg font-semibold rounded-full 
      bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
