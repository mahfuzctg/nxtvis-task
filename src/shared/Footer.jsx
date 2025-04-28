import React from "react";
import { FaBolt } from "react-icons/fa"; // Icon (you can replace later if needed)
import Animation from "../reuseables/Animation";
import { ClassesList, LinksList } from "./manus/FooterLists";
import FooterSocials from "./manus/FooterSocials";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-6 py-12">
      <Animation>
        {" "}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBolt className="text-[#6366F1] text-3xl" />
              <h3 className="text-2xl font-bold text-[#6366F1]">Next Vision</h3>
            </div>
            <p className="text-sm mb-6">
              Empowering innovation with future-ready solutions. At Next Vision,
              we bridge technology and creativity to drive digital
              transformation.
            </p>

            {/* Social Icons */}
            <FooterSocials />
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-[#6366F1]">
              Quick Links
            </h2>
            <LinksList />
          </div>

          {/* Solutions */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-[#6366F1]">
              Our Solutions
            </h2>
            <ClassesList />
          </div>

          {/* Insights */}
          <div>
            <h2 className="text-lg font-bold mb-4 text-[#6366F1]">
              Latest Insights
            </h2>
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://i.postimg.cc/DfxSG82p/typesofsoftwareengineering.jpg"
                alt="Post 1"
                className="w-14 h-14 object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold leading-tight">
                  Building the Future: Emerging Technologies That Matter
                </p>
                <p className="text-xs text-gray-400 mt-1">March 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Animation>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Next Vision. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
