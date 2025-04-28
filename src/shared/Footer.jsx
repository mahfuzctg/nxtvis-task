import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { ClassesList, LinksList } from "./FooterLists"; // 👈 Import lists

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-400 p-2 rounded-full">
              <span className="text-black font-bold text-xl">🌀</span>
            </div>
            <h3 className="text-2xl font-bold">Collab</h3>
          </div>
          <p className="text-sm mb-6">
            Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis
            eget velit aliquet sagittis id consectetur
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="bg-yellow-400 text-black p-2 rounded-full">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-2 rounded-full">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-2 rounded-full">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="bg-yellow-400 text-black p-2 rounded-full">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Links</h2>
          <LinksList /> {/* 🛜 Insert the separated LinksList */}
        </div>

        {/* Class */}
        <div>
          <h2 className="text-lg font-bold mb-4">Class</h2>
          <ClassesList /> {/* 🛜 Insert the separated ClassesList */}
        </div>

        {/* Latest Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Latest Posts</h2>
          <div className="flex items-start gap-4 mb-6">
            <img
              src="https://i.postimg.cc/DfxSG82p/typesofsoftwareengineering.jpg"
              alt="Post 1"
              className="w-14 h-14 object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold leading-tight">
                How to Become a Project Manager in 2022: A Step-by-Step Guide
              </p>
              <p className="text-xs text-gray-400 mt-1">August 12, 2020</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <img
              src="https://i.postimg.cc/5NGjPTQw/software-introduction.jpg"
              alt="Post 2"
              className="w-14 h-14 object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold leading-tight">
                How to Become a Web Designer: A Comprehensive Guide
              </p>
              <p className="text-xs text-gray-400 mt-1">August 14, 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        Merkulove © Collab Template All rights reserved Copyrights 2022
      </div>
    </footer>
  );
};

export default Footer;
