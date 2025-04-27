import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="px-4 pt-4 pb-6 flex flex-col space-y-4 text-gray-700 text-base font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">
          Home
        </Link>
        <Link to="/services" className="hover:text-indigo-600 transition">
          Services
        </Link>
        <Link to="/about" className="hover:text-indigo-600 transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
