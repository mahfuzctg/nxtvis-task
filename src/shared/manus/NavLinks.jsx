import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ className }) => {
  return (
    <>
      <Link to="/" className={className}>
        Home
      </Link>
      <Link to="/services" className={className}>
        Services
      </Link>
      <Link to="/about" className={className}>
        About
      </Link>
      <Link to="/contact" className={className}>
        Contact
      </Link>
    </>
  );
};

export default NavLinks;
