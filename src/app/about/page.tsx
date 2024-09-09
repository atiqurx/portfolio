"use client";
import React from "react";
import { TypewriterEffectSmoothDemo } from "../typewriter-effect";
import Avatar from '@mui/material/Avatar';
import { StickyScrollRevealDemo } from "./sticky-scroll-reveal"
import { MeteorsDemo } from "./meteors"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Computer Science Student a University of Texas at Arlington."
}

const AboutPage: React.FC = () => {
  return (
    <section>
        <div className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{ marginTop: "10rem", marginBottom: "2rem" }}>
          About Me
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-3/4 mx-auto" style={{ gap: '2rem' }}>
          <TypewriterEffectSmoothDemo />
          
          <div className="">
            <Avatar
              className="box-border"
              style={{
                width: '14rem',
                height: '14rem',
                margin: "auto",
                boxShadow: '0 0 2px 3px rgb(59 130 246)',
              }}
              alt="Atiqur Rahman"
              src="/atiq_bw.jpg"
            />
          </div>
        </div>

      {/* Experience Section */}
      <div className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{ marginTop: "5rem", marginBottom: "2rem"}}>
          Experience
      </div>
      
      <div className="max-w-[95%] lg:max-w-[80%] mx-auto">
        <StickyScrollRevealDemo/>
      </div>

      {/* Education
      <div className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{ marginTop: "5rem", marginBottom: "2rem"}}>
          Education
      </div> */}

      {/* Tech Stack */}
      <div className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold" style={{ marginTop: "5rem", marginBottom: "2rem"}}>
          Tech Stack
      </div>

      <MeteorsDemo />

      
    </section>
  );
};

export default AboutPage;
