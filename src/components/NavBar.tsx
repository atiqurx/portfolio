"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  MailIcon,
  CalendarIcon,
  ShareIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
} from "lucide-react";
import Link from "next/link";
import BodyIcon from "@/app/icons/BodyIcon";
import ProjectsIcon from "@/app/icons/ProjectsIcon";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* Main Nav */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] rounded-sm px-4 py-2 flex items-center gap-3 shadow-lg backdrop-blur-md">
          <div className="items-center flex">
            <button
              className={`transition cursor-pointer ${
                showMenu ? "text-white" : "text-white/70 hover:text-white"
              }`}
              title="Slides"
              onClick={toggleMenu}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
          <div className="w-[1px] h-5 bg-zinc-700 mx-2" />
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <MailIcon className="w-[19px] h-[19px]" />
            </button>
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <CalendarIcon className="w-[18px] h-[18px]" />
            </button>
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <ShareIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
          <div className="w-[1px] h-5 bg-zinc-700 mx-2" />
          <div className="items-center flex">
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <button className="rounded-sm bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] text-white/60 hover:text-white transition cursor-pointer flex items-center gap-2 px-4 py-2 shadow-lg backdrop-blur-md">
            <Download className="w-4 h-4 text-orange-500" />
            <span className="text-[13px]">Get Resume</span>
          </button>
        </Link>
      </nav>

      {/* Slides Menu */}
      {showMenu && (
        <div className="fixed bottom-22 left-1/2 -translate-x-1/2 bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] rounded-lg p-2 grid grid-cols-2 gap-2 z-50 shadow-xl backdrop-blur-md">
          {[
            { label: "Work & Edu", icon: BodyIcon },
            { label: "Projects", icon: ProjectsIcon },
            { label: "Tech Stack", icon: <Layers className="w-5 h-5" /> },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center flex-col bg-[rgb(36,38,43)] text-white rounded-md px-14 py-8 cursor-pointer hover:brightness-110 transition"
            >
              <div className="text-2xl mb-3 w-5 h-5">{item.icon}</div>
              <div className="text-[12px] font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;
