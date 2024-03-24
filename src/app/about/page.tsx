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

        <div className="flex justify-between w-11/12">
          <TypewriterEffectSmoothDemo />

          <div className="min-w-28 mr-8">
            <Avatar className="w-40 h-40 box-border" style={{ boxShadow: '0 0 2px 3px rgb(59 130 246)' }} alt="Atiqur Rahman" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          </div>
        </div>
      </div>

      <BasicTimeline />
    </section>
  );
}
export default AboutPage;
