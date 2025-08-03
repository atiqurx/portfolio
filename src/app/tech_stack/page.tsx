import React from "react";
import Head from "next/head";
import {
  FaPython,
  FaJava,
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { TbBrandCSharp, TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiCloudflare,
  SiTerraform,
  SiPostman,
  SiTensorflow,
  SiOpencv,
  SiSqlite,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiDotnet,
  SiReact,
} from "react-icons/si";
import TitleBar from "@/components/TitleBar";
import { Layers } from "lucide-react";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import TechCard from "@/components/cards/TechCard";

// Static tech stack data outside the component
const programming = [
  { tech: "Python", logo: <FaPython className="w-7 h-7" /> },
  { tech: "Java", logo: <FaJava className="w-7 h-7" /> },
  { tech: "C", logo: <SiC className="w-7 h-7" /> },
  { tech: "C++", logo: <SiCplusplus className="w-7 h-7" /> },
  { tech: "C#", logo: <TbBrandCSharp className="w-7 h-7" /> },
  { tech: "JavaScript", logo: <SiJavascript className="w-7 h-7" /> },
  { tech: "TypeScript", logo: <SiTypescript className="w-7 h-7" /> },
  { tech: "CSS", logo: <FaCss3Alt className="w-7 h-7" /> },
  { tech: "SQL", logo: <FaDatabase className="w-7 h-7" /> },
  { tech: "SQLite", logo: <SiSqlite className="w-7 h-7" /> },
  { tech: "NoSQL", logo: <SiMongodb className="w-7 h-7" /> },
  { tech: "PostgreSQL", logo: <SiPostgresql className="w-7 h-7" /> },
];

const technologies = [
  { tech: "Azure", logo: <VscAzure className="w-7 h-7" /> },
  { tech: "AWS", logo: <FaAws className="w-7 h-7" /> },
  { tech: "MongoDB", logo: <SiMongodb className="w-7 h-7" /> },
  { tech: "Firebase", logo: <SiFirebase className="w-7 h-7" /> },
  { tech: "Databricks", logo: <SiPostgresql className="w-7 h-7" /> },
  { tech: "Cloudflare", logo: <SiCloudflare className="w-7 h-7" /> },
  { tech: "Terraform", logo: <SiTerraform className="w-7 h-7" /> },
  { tech: "Postman", logo: <SiPostman className="w-7 h-7" /> },
  { tech: "TensorFlow", logo: <SiTensorflow className="w-7 h-7" /> },
  { tech: "OpenCV", logo: <SiOpencv className="w-7 h-7" /> },
  { tech: "Unix", logo: <FaLinux className="w-7 h-7" /> },
  { tech: "Android Studio", logo: <FaAndroid className="w-7 h-7" /> },
];

const frameworks = [
  { tech: "React", logo: <SiReact className="w-7 h-7" /> },
  { tech: "Next.js", logo: <SiNextdotjs className="w-7 h-7" /> },
  { tech: "React Native", logo: <TbBrandReactNative className="w-7 h-7" /> },
  { tech: ".NET", logo: <SiDotnet className="w-7 h-7" /> },
  { tech: "Django", logo: <SiDjango className="w-7 h-7" /> },
  { tech: "Flask", logo: <SiFlask className="w-7 h-7" /> },
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Atiqur Rahman - Tech Stack</title>
        <meta
          name="description"
          content="Explore Atiqur Rahman's tech stack: programming languages, technologies, and frameworks used to build robust, scalable applications."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="font-sans items-center justify-items-center min-h-screen py-10 md:py-20">
        <main className="w-[90%] md:w-[68%] mx-auto">
          <TitleBar label="Tech Stack" icon={<Layers className="w-4 h-4" />} />

          {/* Intro */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 mt-6">
            <div className="w-full md:w-[50%]">
              <h1 className="text-[24px]/[1.2em] font-bold">
                <span className="text-white">My toolbox essentials.</span>{" "}
                <br />
                <span className="text-white/70">
                  Tools I use to build robust, scalable apps.
                </span>
              </h1>
            </div>
            <div className="w-full md:w-[50%]">
              <p className="text-white/70 leading-relaxed text-[13px]">
                I focus on full-stack engineering, infrastructure, and
                automation. Here&apos;s a glimpse at the tools I work with
                across dev, cloud, and ML.
              </p>
            </div>
          </div>

          {/* Programming */}
          <section className="mt-8">
            <TitleBar
              label="Programming"
              icon={<Layers className="w-4 h-4" />}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
              {programming.map(({ tech, logo }) => (
                <TechCard key={tech} tech={tech} logo={logo} />
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mt-8">
            <TitleBar
              label="Technologies"
              icon={<Layers className="w-4 h-4" />}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
              {technologies.map(({ tech, logo }) => (
                <TechCard key={tech} tech={tech} logo={logo} />
              ))}
            </div>
          </section>

          {/* Frameworks */}
          <section className="mt-8">
            <TitleBar
              label="Frameworks"
              icon={<Layers className="w-4 h-4" />}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
              {frameworks.map(({ tech, logo }) => (
                <TechCard key={tech} tech={tech} logo={logo} />
              ))}
            </div>
          </section>

          <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
        </main>
      </div>
    </>
  );
}
