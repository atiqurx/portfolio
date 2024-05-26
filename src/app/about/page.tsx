"use client";
import React from "react";
import { TypewriterEffectSmoothDemo } from "../typewriter-effect";
import BasicTimeline from "../../../components/ui/Timeline";
import Avatar from '@mui/material/Avatar';

export function AboutPage() {
  return (
    <section>
        <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold" style={{ marginTop: "10rem", marginBottom: "2rem" }}>
          About Me
        </div>

        <div className="flex justify-between w-11/12" style={{ gap: '2rem', margin: "auto" }}>
          <TypewriterEffectSmoothDemo />

          <div className="">
            <Avatar className=" box-border" style={{ width:'14rem', height:'14rem', marginRight:'6rem', boxShadow: '0 0 2px 3px rgb(59 130 246)' }} alt="Atiqur Rahman" src="/atiq_bw.jpg" />
          </div>
        </div>

      {/* Experience Section */}

      <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold" style={{ marginTop: "5rem", marginBottom: "2rem"}}>
          Experience
      </div>
      
      <BasicTimeline />


    </section>
  );
}
export default AboutPage;
