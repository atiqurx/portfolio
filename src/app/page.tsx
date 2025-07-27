import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import BodyIcon from "./icons/BodyIcon";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { EducationCard } from "@/components/cards/EducationCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ResumeDownloadCard } from "@/components/cards/ResumeDownloadCard";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="w-[80%] flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
