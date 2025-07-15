import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b1f0c] text-white px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Top CTA Section */}
      <div className="bg-[#0b1f0c] py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-4">
            Reach Your Requirement Goals Right on Schedule
          </h2>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-400 mb-6 mx-auto md:mx-0 max-w-md text-sm">
            Sign up, complete your profile, and start Browse projects. Submit
            proposals and communicate with clients to get hired.
          </p>
          <button className="bg-custom-green text-white px-6 py-2 rounded-full text-xs font-semibold hover:bg-green-600 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300 text-sm">
          {/* Logo */}
          <div className="">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="QuantumEdge Software Logo"
                width={150}
                height={35}
                className="mb-4"
              />
            </div>
          </div>

          {/* About Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">About</h4>
            <ul className="space-y-3">
              <li className="hover:text-custom-green cursor-pointer">About Us</li>
              <li className="hover:text-custom-green cursor-pointer">Become Seller</li>
              <li className="hover:text-custom-green cursor-pointer">ProProkidos</li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">
              Categories
            </h4>
            <ul className="space-y-3">
              <li className="hover:text-custom-green cursor-pointer">Design & Creative</li>
              <li className="hover:text-custom-green cursor-pointer">Development & IT</li>
              <li className="hover:text-custom-green cursor-pointer">Music & Audio</li>
              <li className="hover:text-custom-green cursor-pointer">Programming & Tech</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li className="hover:text-custom-green cursor-pointer">Help & Support</li>
              <li className="hover:text-custom-green cursor-pointer">FAQ</li>
              <li className="hover:text-custom-green cursor-pointer">Contact Us</li>
              <li className="hover:text-custom-green cursor-pointer">Terms & Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media and Popular Posts Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 relative">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-4 mb-6 md:mb-0 z-30">
          <button className="bg-gray-700 opacity-85 p-2 rounded-full hover:bg-custom-green transition-colors">
            <FaFacebookF size={"1rem"} />
          </button>
          <button className="bg-gray-700 opacity-85 p-2 rounded-full hover:bg-custom-green transition-colors">
            <FaInstagram size={"1rem"} />
          </button>
          <button className="bg-gray-700 opacity-85 p-2 rounded-full hover:bg-custom-green transition-colors">
            <FaXTwitter size={"1rem"} />
          </button>
        </div>

        {/* Popular Post Section */}
        <div className="w-full md:w-auto">
          <h4 className="text-base font-semibold mb-4 text-center md:text-left">Our Popular Post</h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            {/* Post Card 1 */}
            <div className="flex items-center space-x-3 max-w-xs mx-auto md:mx-0">
              <img
                src="/popular.jpg"
                alt="Popular 1"
                className="w-16 h-12 object-cover rounded"
              />
              <div className="max-w-40">
                <p className="text-gray-500 text-xs mb-1">November 1, 2024</p>
                <h5 className="text-white text-xs font-medium hover:text-custom-green cursor-pointer transition-colors">
                  Unveils the Best Canadian Cities for Biking
                </h5>
              </div>
            </div>
            {/* Post Card 2 -  */}
            <div className="flex items-center space-x-3 max-w-xs mx-auto md:mx-0">
              <img
                src="/popular.jpg"
                alt="Popular 2"
                className="w-16 h-12 object-cover rounded"
              />
              <div className="max-w-40">
                <p className="text-gray-500 text-xs mb-1">November 7, 2024</p>
                <h5 className="text-white text-xs font-medium hover:text-custom-green cursor-pointer transition-colors">
                  Unveils the Best Canadian Cities for Biking
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* Blurred backdrop circles */}
        <div className="hidden md:block absolute bottom-[-70px] left-18 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-custom-green p-8 rounded-full blur-2xl shadow-lg opacity-40 z-10"></div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; QuantumEdge Software INC. 2023. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;