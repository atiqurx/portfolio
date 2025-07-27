import React from "react";
import TitleBar from "@/components/TitleBar";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import ProjectsIcon from "@/app/icons/ProjectsIcon";

function page() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-20">
      <main className="w-[68%]">
        <TitleBar label="Projects" icon={ProjectsIcon} />
        <div className="flex flex-col md:flex-row gap-16 mt-6">
          <div className="w-full md:w-[50%]">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">From vision to implementation.</span>{" "}
              <br />
              <span className="text-white/70">
                User-centric design deliver good results.
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ProjectCard
            image={
              <img src="/demo.jpg" alt="Project 1" className="w-full h-auto" />
            }
            title="Portfolio Website"
            subtitle="Frontend"
            description="Built a sleek developer portfolio using Next.js, Tailwind, and Framer Motion."
            link="#"
            tags="Next.js, Tailwind, Framer Motion"
          />
          <ProjectCard
            image={
              <img src="/demo.jpg" alt="Project 2" className="w-full h-auto" />
            }
            title="OCR Finance Tracker"
            subtitle="Fullstack"
            description="An OCR-powered app to extract and visualize financial insights from documents."
            link="#"
            tags="Tesseract, React, MongoDB"
          />
          <ProjectCard
            image={
              <img src="/demo.jpg" alt="Project 2" className="w-full h-auto" />
            }
            title="OCR Finance Tracker"
            subtitle="Fullstack"
            description="An OCR-powered app to extract and visualize financial insights from documents."
            link="#"
            tags="Tesseract, React, MongoDB"
          />
          <ProjectCard
            image={
              <img src="/demo.jpg" alt="Project 2" className="w-full h-auto" />
            }
            title="OCR Finance Tracker"
            subtitle="Fullstack"
            description="An OCR-powered app to extract and visualize financial insights from documents."
            link="#"
            tags="Tesseract, React, MongoDB"
          />
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </div>
  );
}

export default page;
