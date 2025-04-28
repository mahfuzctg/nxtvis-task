// FooterLists.jsx

import React from "react";
import { classes, links } from "./FooterLinks";

export const LinksList = () => (
  <ul className="space-y-2 text-sm">
    {links.map((item, index) => (
      <li key={index} className="flex items-center gap-2">
        <span className="text-[#6366F1]">▶</span> {/* Updated color */}
        {item.label}
      </li>
    ))}
  </ul>
);

export const ClassesList = () => (
  <ul className="space-y-2 text-sm">
    {classes.map((item, index) => (
      <li key={index} className="flex items-center gap-2">
        <span className="text-[#6366F1]">▶</span> {/* Updated color */}
        {item.label}
      </li>
    ))}
  </ul>
);
