import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./manus/MobileMenu";
import NavLinks from "./manus/NavLinks";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 tracking-tight">
          <Link to="/" className="hover:text-indigo-500 transition-colors">
            NxtVis
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 text-base font-medium">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-all"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <MobileMenu />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
