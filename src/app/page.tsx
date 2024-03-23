"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import { SparklesPreview } from "./sparkles";
import { FloatingNavDemo } from "./floating-navbar";
import { ThreeDCardDemo } from "./3d-card"
import { FaGithub, FaKaggle, FaLinkedin } from 'react-icons/fa';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">
      <div>
        <FloatingNavDemo />
      </div>

      <div>
        <SparklesPreview />
      </div>

      <section id="projects" >
        <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Explore Projects
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
        </div>

      </section>
      
      
      
      <footer className="w-11/12 min-h-48">
        <hr className="border-t border-stone-600"/>

        <div className="flex justify-between lg:p-8 p-4 text-stone-300">
          {/* Copyright */}
          <div>
            <h1>Atiqur Rahman</h1>
            <p> &copy; 2024 Atiqur Rahman. All rights reserved.</p>
          </div>

          {/* Social Media */}
          <div className="flex">
            <div className="mr-4">
              <a href="https://github.com/atiqurx" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
            <div className="mr-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaKaggle size={20} />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/atiqurx" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
