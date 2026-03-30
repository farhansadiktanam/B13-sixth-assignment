import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer sm:footer-horizontal bg-[#101727] text-white p-20 mt-20">
        <aside className="space-y-3">
          <div className="flex gap-3 items-center">
            <a href="#" className="text-3xl font-bold">
              DigiTools
            </a>
          </div>
          <p className="">
            Premium digital tools for creators,
            <br /> professionals, and businesses. Work smarter <br /> with our
            suite of powerful tools.
          </p>
        </aside>
        <nav className="space-y-3">
          <h6 className="footer-title  text-white">Services</h6>
          <a className="link link-hover text-gray-400">Branding</a>
          <a className="link link-hover text-gray-400">Design</a>
          <a className="link link-hover text-gray-400">Marketing</a>
          <a className="link link-hover text-gray-400">Advertisement</a>
        </nav>
        <nav className="space-y-3">
          <h6 className="footer-title  text-white">Company</h6>
          <a className="link link-hover text-gray-400">About us</a>
          <a className="link link-hover text-gray-400">Contact</a>
          <a className="link link-hover text-gray-400">Jobs</a>
          <a className="link link-hover text-gray-400">Press kit</a>
        </nav>
        <nav className="space-y-3">
          <h6 className="footer-title  text-white">Legal</h6>
          <a className="link link-hover text-gray-400">Terms of use</a>
          <a className="link link-hover text-gray-400">Privacy policy</a>
          <a className="link link-hover text-gray-400">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="text-xl">
              <BsTwitterX />
            </a>
            <a className="text-xl">
              <FaFacebookSquare />
            </a>
            <a className="text-xl">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </div>
      <div className="bg-[#101727] text-white flex justify-between p-10 border-t">
        <p>© 2026 Digitools. All rights reserved.</p>
        <ul className="flex gap-4">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service </a>
          </li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
