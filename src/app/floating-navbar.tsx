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
      name: "Pojects",
      link: "/#projects"
    },
    {
      name: "About",
      link: "/about"
    },
  ];


  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
