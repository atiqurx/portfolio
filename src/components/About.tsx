import React from "react";
import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import BodyIcon from "@/app/icons/BodyIcon";
import { MailIcon, GraduationCap, BriefcaseBusiness } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { EducationCard } from "@/components/cards/EducationCard";
import { experienceData } from "@/lib/data";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";
import Link from "next/link";

export default function About() {
  return (
    <>
      <main className="w-[90%] md:w-[68%]">
        <TitleBar label="Work & Edu" icon={BodyIcon} />

        {/* INTRO */}
        <section className="flex flex-col md:flex-row gap-10 mt-6">
          {/* BIO */}
          <div className="w-full md:w-[60%] mx-auto">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">Atiqur Rahman.</span> <br />
              <span className="text-white/70">Software Engineer.</span>
            </h1>

            <p className="mt-4 text-white/70 leading-relaxed text-[13px]">
              I&apos;m currently pursuing a degree in Computer Science at UT
              Arlington, where I&apos;ve developed a strong foundation in
              software engineering and a passion for building meaningful
              products. With a unique blend of technical ability and leadership
              experience, I thrive in collaborative environments where I can
              contribute to impactful solutions.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-[13px]">
              I currently lead software projects at the largest tech club on
              campus, driving initiatives that bridge innovation and community.
              Outside of work, I draw inspiration from music, nature, and
              everyday interactions—fueling both my creativity and curiosity as
              a developer.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="mailto:axr0966@mavs.uta.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition text-[13px] cursor-pointer">
                  <MailIcon className="w-4 h-4" />
                  E-mail
                </button>
              </Link>
              <Link
                href="https://github.com/atiqurx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition text-[13px] cursor-pointer">
                  <FaGithub className="w-4 h-4" />
                  Github
                </button>
              </Link>
              <Link
                href="https://linkedin.com/in/atiqurx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition cursor-pointer">
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
              <Image
                src="/atiqur.jpg"
                alt="Atiqur Rahman"
                width={500}
                height={500}
                className="object-contain w-full h-full"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* WORK & EDU */}
        <section className="flex flex-col md:flex-row gap-6 mt-16">
          {/* Experience */}
          <div className="w-full md:w-[50%]">
            <TitleBar
              label="Work Experience"
              icon={<BriefcaseBusiness className="w-4 h-4" />}
              className="mb-6"
            />
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                company={exp.company}
                role={exp.role}
                description={exp.description}
                startDate={exp.startDate}
                endDate={exp.endDate}
                location={exp.location}
                logo={exp.logo}
                logoAlt={exp.logoAlt}
              />
            ))}
          </div>

          {/* Education */}
          <div className="w-full md:w-[50%]">
            <TitleBar
              label="Education"
              icon={<GraduationCap className="w-4 h-4" />}
              className="mb-6"
            />
            <EducationCard
              institution="The University of Texas at Arlington"
              subtitle="Honors B.Sc in Computer Science"
              description="Relevant Coursework: Data Structures & Algorithms, Linear Algebra, Discrete Structures, Object Oriented Programming, Software Testing. Awards & Honors: HackTX ‘24, HackUTA 6, HackSMU VI, Dean’s List, Freshman Distinction Roll"
              startDate="Aug. 2022"
              endDate="May 2026"
              location="Arlington, Texas"
              logo="/logos/uta.jpeg"
              logoAlt="UTA Logo"
            />
          </div>
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </>
  );
}
