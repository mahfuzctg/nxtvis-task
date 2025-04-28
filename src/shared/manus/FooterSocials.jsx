// FooterSocials.jsx

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { socials } from "./FooterLinks";

const icons = {
  FaFacebookF: <FaFacebookF size={16} />,
  FaInstagram: <FaInstagram size={16} />,
  FaTwitter: <FaTwitter size={16} />,
  FaWhatsapp: <FaWhatsapp size={16} />,
};

const FooterSocials = () => {
  return (
    <div className="flex space-x-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="p-2 rounded-full border border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1] hover:text-white transition"
        >
          {icons[social.icon]}
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
