import React from "react";
import TitleBar from "@/components/TitleBar";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import ProjectsIcon from "@/app/icons/ProjectsIcon";
import { projectData } from "@/lib/data";

function page() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-20">
      <main className="w-[68%]">
        <TitleBar label="Projects" icon={ProjectsIcon} />
        <section className="flex flex-col md:flex-row gap-16 mt-6">
          <div className="w-full md:w-[50%]">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">Code with a purpose.</span> <br />
              <span className="text-white/70">
                Building systems that solve real problems and scale with users.
              </span>
            </h1>
          </div>

          <div className="w-full md:w-[50%]">
            <div className="relative w-full  overflow-hidden">
              <p className="text-white/70 leading-relaxed text-[13px]">
                I focus on delivering applications that are fast, scalable, and
                easy to maintain. Whether it's designing a dashboard,
                implementing OCR pipelines, or integrating APIs, I aim to create
                software that makes life easier for users and devs alike.
              </p>
            </div>
          </div>
        </section>
        {/* PROJECTS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-auto"
                />
              }
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </div>
  );
}

export default page;
