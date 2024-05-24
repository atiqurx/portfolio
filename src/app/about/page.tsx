"use client";
import React from "react";
import { TypewriterEffectSmoothDemo } from "../typewriter-effect";
import BasicTimeline from "../../../components/ui/Timeline";
import Avatar from '@mui/material/Avatar';

export function AboutPage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="p-4" style={{ marginTop: "10rem" }}>
          About Me
        </h1>

        <div className="flex justify-between w-11/12" style={{ gap: '2rem' }}>
          <TypewriterEffectSmoothDemo />

          <div className="">
            <Avatar className=" box-border" style={{ width:'14rem', height:'14rem', marginRight:'6rem', boxShadow: '0 0 2px 3px rgb(59 130 246)' }} alt="Atiqur Rahman" src="/atiq_bw.jpg" />
          </div>
        </div>
      </div>
      
      <BasicTimeline />
    </section>
  );
}
export default AboutPage;
