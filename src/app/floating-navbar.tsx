"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Resume",
      link: "/contact"
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
