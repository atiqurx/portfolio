import React from "react";
import {
  FaPython,
  FaJava,
  FaAws,
  FaReact,
  FaNodeJs,
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
  SiNodedotjs,
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

function page() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-20">
      <main className="w-[68%]">
        <TitleBar label="Toolbox" icon={<Layers className="w-4 h-4" />} />

        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-16 mt-6">
          <div className="w-full md:w-[50%]">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">My toolbox essentials.</span> <br />
              <span className="text-white/70">
                Tools I use to build robust, scalable apps.
              </span>
            </h1>
          </div>
          <div className="w-full md:w-[50%]">
            <p className="text-white/70 leading-relaxed text-[13px]">
              I focus on full-stack engineering, infrastructure, and automation.
              Here's a glimpse at the tools I work with across dev, cloud, and
              ML.
            </p>
          </div>
        </div>

        {/* Programming */}
        <section className="mt-8">
          <TitleBar label="Programming" icon={<Layers className="w-4 h-4" />} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
            <TechCard tech="Python" logo={<FaPython className="w-7 h-7" />} />
            <TechCard tech="Java" logo={<FaJava className="w-7 h-7" />} />
            <TechCard tech="C" logo={<SiC className="w-7 h-7" />} />
            <TechCard tech="C++" logo={<SiCplusplus className="w-7 h-7" />} />
            <TechCard tech="C#" logo={<TbBrandCSharp className="w-7 h-7" />} />
            <TechCard
              tech="JavaScript"
              logo={<SiJavascript className="w-7 h-7" />}
            />
            <TechCard
              tech="TypeScript"
              logo={<SiTypescript className="w-7 h-7" />}
            />
            <TechCard tech="CSS" logo={<FaCss3Alt className="w-7 h-7" />} />
            <TechCard tech="SQL" logo={<FaDatabase className="w-7 h-7" />} />
            <TechCard tech="SQLite" logo={<SiSqlite className="w-7 h-7" />} />
            <TechCard tech="NoSQL" logo={<SiMongodb className="w-7 h-7" />} />
            <TechCard
              tech="PostgreSQL"
              logo={<SiPostgresql className="w-7 h-7" />}
            />
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-8">
          <TitleBar
            label="Technologies"
            icon={<Layers className="w-4 h-4" />}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
            <TechCard tech="Azure" logo={<VscAzure className="w-7 h-7" />} />
            <TechCard tech="AWS" logo={<FaAws className="w-7 h-7" />} />
            <TechCard tech="MongoDB" logo={<SiMongodb className="w-7 h-7" />} />
            <TechCard
              tech="Firebase"
              logo={<SiFirebase className="w-7 h-7" />}
            />
            <TechCard
              tech="Databricks"
              logo={<SiPostgresql className="w-7 h-7" />}
            />{" "}
            {/* fallback */}
            <TechCard
              tech="Cloudflare"
              logo={<SiCloudflare className="w-7 h-7" />}
            />
            <TechCard
              tech="Terraform"
              logo={<SiTerraform className="w-7 h-7" />}
            />
            <TechCard tech="Postman" logo={<SiPostman className="w-7 h-7" />} />
            <TechCard
              tech="TensorFlow"
              logo={<SiTensorflow className="w-7 h-7" />}
            />
            <TechCard tech="OpenCV" logo={<SiOpencv className="w-7 h-7" />} />
            <TechCard tech="Unix" logo={<FaLinux className="w-7 h-7" />} />
            <TechCard
              tech="Android Studio"
              logo={<FaAndroid className="w-7 h-7" />}
            />
          </div>
        </section>

        {/* Frameworks */}
        <section className="mt-8">
          <TitleBar label="Frameworks" icon={<Layers className="w-4 h-4" />} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
            <TechCard tech="React" logo={<SiReact className="w-7 h-7" />} />
            <TechCard
              tech="Next.js"
              logo={<SiNextdotjs className="w-7 h-7" />}
            />
            <TechCard
              tech="React Native"
              logo={<TbBrandReactNative className="w-7 h-7" />}
            />
            <TechCard tech=".NET" logo={<SiDotnet className="w-7 h-7" />} />
            <TechCard tech="Django" logo={<SiDjango className="w-7 h-7" />} />
            <TechCard tech="Flask" logo={<SiFlask className="w-7 h-7" />} />
          </div>
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </div>
  );
}

export default page;
