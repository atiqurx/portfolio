"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import { SparklesPreview } from "./sparkles";
import { FloatingNavDemo } from "./floating-navbar";
import { ThreeDCardDemo } from "./3d-card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">
      <div>
        <FloatingNavDemo />
      </div>

      <div>
        <SparklesPreview />
      </div>

      <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Explore Projects
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
      
    </main>
  );
}
