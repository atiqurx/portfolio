"use client";
import React from "react";
import { TypewriterEffectSmoothDemo } from "../typewriter-effect";
import BasicTimeline from "../../../components/ui/Timeline";


export function AboutPage() {


  return (
    <section>
      <div className="flex flex-col items-center justify-center">

        <h1 className="p-4" style={{ marginTop: "10rem" }}>About Me</h1>


          <div className="flex justify-between w-11/12">
            <TypewriterEffectSmoothDemo  />
            
            <div className="">
            
            </div>
          </div>
          
        </div>

        <BasicTimeline />
    </section>
    
  );
}
export default AboutPage;