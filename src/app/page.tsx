import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import BodyIcon from "./icons/BodyIcon";
import { MailIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { EducationCard } from "@/components/cards/EducationCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen py-20">
      <main className="w-[68%]">
        <TitleBar label="Work & Edu" icon={BodyIcon} />

        <section className="flex flex-col md:flex-row gap-10 mt-6">
          {/* Text Section — 60% */}
          <div className="w-full md:w-[60%]">
            <h1 className="text-[24px]/[1.2em] font-bold">
              <span className="text-white">Atiqur Rahman.</span> <br />
              <span className="text-white/70">Software Engineer.</span>
            </h1>

            <p className="mt-6 text-white/70 leading-relaxed text-[13px]">
              I'm an experienced product designer with over 10 years of
              experience, specializing in creating innovative digital products
              used by millions worldwide. My passion for design drives me to
              strive for excellence in every detail, ensuring unforgettable user
              experiences.
            </p>

            <p className="mt-4 text-white/70 leading-relaxed text-[13px]">
              Beyond my professional work, I'm also an avid nature enthusiast,
              cyclist, and photographer. These interests inspire me and provide
              fresh perspectives that translate into creating even better
              solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition text-[13px] cursor-pointer">
                <MailIcon className="w-4 h-4" />
                E-mail
              </button>
              <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition text-[13px] cursor-pointer">
                <TwitterIcon className="w-4 h-4" />
                Twitter
              </button>
              <button className="flex bg-[rgb(22,23,26)] items-center gap-2 border border-white/20 px-4 py-[4px] rounded-[3px] hover:bg-white/10 transition cursor-pointer">
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </button>
            </div>
          </div>

          {/* Image Section — 40% */}
          <div className="w-full md:w-[40%]">
            <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden">
              <Image
                src="/atiqur.jpeg"
                alt="Atiqur Rahman"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-6 mt-16">
          <div className="w-full md:w-[50%]">
            <TitleBar
              label="Work Experience"
              icon={BodyIcon}
              className="mb-6"
            />
            <ExperienceCard
              company="Enchanted Rock"
              role="Software Engineer Intern"
              description="I graduated from Stanford University with a specialization in Human-Computer Interaction. My coursework delved into understanding the interactions between humans and technology, as well as user interface design, fostering my development of design and analytical skills in the human-computer interaction realm."
              startDate="Jun. 2025"
              endDate="Current"
              location="Houston, Texas"
            />
            <ExperienceCard
              company="Enchanted Rock"
              role="Software Engineer Intern"
              description="I graduated from Stanford University with a specialization in Human-Computer Interaction. My coursework delved into understanding the interactions between humans and technology, as well as user interface design, fostering my development of design and analytical skills in the human-computer interaction realm."
              startDate="Jun. 2025"
              endDate="Current"
              location="Houston, Texas"
            />
            <ExperienceCard
              company="Enchanted Rock"
              role="Software Engineer Intern"
              description="I graduated from Stanford University with a specialization in Human-Computer Interaction. My coursework delved into understanding the interactions between humans and technology, as well as user interface design, fostering my development of design and analytical skills in the human-computer interaction realm."
              startDate="Jun. 2025"
              endDate="Current"
              location="Houston, Texas"
            />
          </div>
          <div className="w-full md:w-[50%]">
            <TitleBar label="Education" icon={BodyIcon} className="mb-6" />
            <EducationCard
              institution="The University of Texas at Arlington"
              subtitle="Honors B.Sc in Computer Science "
              description="I graduated from Stanford University with a specialization in Human-Computer Interaction. My coursework delved into understanding the interactions between humans and technology, as well as user interface design, fostering my development of design and analytical skills in the human-computer interaction realm."
              startDate="Aug. 2022"
              endDate="May 2026"
              location="Arlington, Texas"
            ></EducationCard>
          </div>
        </section>

        <ResumeDownloadCard resumeUrl="/Atiqur_Rahman_Resume.pdf" />
      </main>
    </div>
  );
}
