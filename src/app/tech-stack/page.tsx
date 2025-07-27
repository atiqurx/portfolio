import React from "react";
import TitleBar from "@/components/TitleBar";
import { Layers } from "lucide-react";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import TechCard from "@/components/cards/TechCard";
import { FaPython } from "react-icons/fa";

function page() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-20">
      <main className="w-[68%]">
        <TitleBar label="Projects" icon={<Layers className="w-4 h-4" />} />
        <div className="flex flex-col md:flex-row gap-16 mt-6">
          <div className="w-full md:w-[50%]">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">My toolbox essentials.</span> <br />
              <span className="text-white/70">
                Only good tools for making good design.
              </span>
            </h1>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="relative w-full  overflow-hidden">
              <p className="text-white/70 leading-relaxed text-[13px]">
                I'm an experienced product designer with over 10 years of
                experience, specializing in creating innovative digital products
                used by millions worldwide.
              </p>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <TitleBar label="Programming" icon={<Layers className="w-4 h-4" />} />
          <div className="flex gap-4 my-6">
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
          </div>
          <TitleBar
            label="Technologies"
            icon={<Layers className="w-4 h-4" />}
          />
          <div className="flex gap-4 my-6">
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
          </div>
          <TitleBar label="Frameworks" icon={<Layers className="w-4 h-4" />} />
          <div className="flex gap-4 my-6">
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
          </div>
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </div>
  );
}

export default page;
