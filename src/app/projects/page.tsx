import React from "react";
import Head from "next/head";
import Image from "next/image";
import TitleBar from "@/components/TitleBar";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import ProjectsIcon from "@/app/icons/ProjectsIcon";
import { projectData } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Head>
        <title>Atiqur Rahman - Projects</title>
        <meta
          name="description"
          content="Explore Atiqur Rahman's projects building fast, scalable applications."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="font-sans items-center justify-items-center min-h-screen py-10 md:py-20">
        <main className="w-[90%] md:w-[68%] mx-auto">
          <TitleBar label="Projects" icon={ProjectsIcon} />

          <section className="flex flex-col md:flex-row gap-4 md:gap-16 mt-6">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[24px]/[1.2em] font-bold">
                <span className="text-white">Code with a purpose.</span> <br />
                <span className="text-white/70">
                  Building systems that solve real problems and scale with
                  users.
                </span>
              </h1>
            </div>

            <div className="w-full md:w-[50%]">
              <div className="relative w-full overflow-hidden">
                <p className="text-white/70 leading-relaxed text-[13px]">
                  I focus on delivering applications that are fast, scalable,
                  and easy to maintain. Whether it&apos;s designing a dashboard,
                  implementing OCR pipelines, or integrating APIs, I aim to
                  build software that not only solves real problems but also
                  contributes meaningfully to the world.
                </p>
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                image={
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    className="w-full h-auto"
                    width={500}
                    height={300}
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
    </>
  );
}
