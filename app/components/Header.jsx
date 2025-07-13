"use client"

import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="w-full bg-[#0f1a0f] text-white p-4 flex lg:gap-8 flex-col lg:flex-row items-center shadow-md sm:px-8 xl:px-40">
      {/* Top Bar (Logo + Mobile Controls) */}
      <div className="w-full flex lg:flex-1 items-center justify-between lg:justify-start lg:w-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="QuantumEdge Logo" className="h-10 w-auto" />
          {/* Categories Button - Hidden on mobile */}
          <button className="hidden lg:flex items-center gap-1 bg-[#a7f67c0f] border border-custom-green text-custom-green px-3 py-1 rounded-full text-sm font-semibold hover:text-white transition cursor-pointer">
            <BiCategory />
            <span>Categories</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Mobile Search Toggle */}
          <button 
            onClick={toggleSearch}
            className="text-white p-2"
            aria-label="Toggle search"
          >
            {isSearchOpen ? <MdClose /> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Search Bar - Hidden on mobile unless toggled */}
      <div className={`${isSearchOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto mt-4 lg:mt-0`}>
        <div className="text-xs flex items-center w-full lg:w-[300px] h-11 bg-[#1f2d1f] px-3 py-1 rounded-lg relative">
          <select className="appearance-none bg-[#88888838] text-white text-left w-28 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Freelancer</option>
            <option>Developer</option>
            <option>Designer</option>
          </select>
          <div className="pointer-events-none flex items-center px-2 text-white absolute left-20">
            <MdOutlineArrowDropDown size={"1.2rem"} />
          </div>
        </div>
      </div>

      {/* Navigation Links - Hidden on mobile unless toggled */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0 text-xs`}>
        <buttom  className="text-custom-green hover:underline w-full text-center lg:w-auto cursor-pointer">
          BECOME A SELLER
        </buttom>
        <buttom  className="hover:underline w-full text-center lg:w-auto cursor-pointer">
          LOGIN
        </buttom>
        <button className="bg-custom-green hover:bg-green-600 text-white px-4 py-1 rounded-full cursor-pointer w-full lg:w-auto">
          Registration
        </button>
      </div>
    </header>
  );
};

export default Header;