"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { useScroll } from "react-use";


export function FloatingNavDemo() {


  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/"
    },
    {
      name: "Pojects",
      link: "/#projects"
    },
  ];


  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
