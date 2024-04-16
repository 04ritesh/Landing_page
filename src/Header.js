import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const textColor = "text-gray-500";
  const hoverColor = "hover:text-gray-800";

  return (
    <header className="py-4 shadow-md">
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center relative">
        <h2 className="text-black text-xl font-bold">Karo Abhayas</h2>
      
        <button
          className="block md:hidden text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={toggleMobileNav}
        >
          {showMobileNav ? "Close" : "Menu"}
        </button>
       
        <nav className={`hidden md:flex md:space-x-8 ${showMobileNav ? 'hidden' : 'block'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            <li>
              <a href="#" className="text-white bg-black py-2 px-4 rounded-full text-sm sm:text-base hover:text-gray-600">JOIN US</a>
            </li>
            <li>
              <a href="#" className={`${textColor} ${hoverColor}`}>Classes</a>
            </li>
            <li>
              <a href="#" className={`${textColor} ${hoverColor}`}>Products</a>
            </li>
            <li>
              <a href="#" className={`${textColor} ${hoverColor}`}>About Us</a>
            </li>
          
            <li>
              <FaShoppingCart className="text-black text-2xl hover:text-gray-600" />
            </li>
           
            <li>
              <FaUser className="text-black text-2xl hover:text-gray-600" />
            </li>
          </ul>
        </nav>
        {/* Mobile menu dropdown */}
        {showMobileNav && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            <ul>
              <li>
                <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-gray-900">JOIN US</a>
              </li>
              <li>
                <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-gray-900">Classes</a>
              </li>
              <li>
                <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-gray-900">Products</a>
              </li>
              <li>
                <a href="#" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 hover:text-gray-900">About Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
