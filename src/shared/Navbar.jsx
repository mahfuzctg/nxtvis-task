import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          <Link to="/">Appie.</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 text-base font-medium">
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

        {/* Right side (Login and Get Started) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/login"
            className="text-gray-700 hover:text-indigo-600 text-base font-medium transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
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
                className="w-6 h-6"
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
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
            <Link to="/login" className="hover:text-indigo-600 transition">
              Log in
            </Link>
            <Link
              to="/signup"
              className="mt-2 inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-500 transition text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
