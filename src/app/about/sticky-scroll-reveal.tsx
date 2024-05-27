"use client";
import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Supplemental Instruction Leader - CSE 1310",
    subtitle: "UTA Academic Success Center",
    description:
      "Facilitated interactive group learning sessions for a cohort of 58 students in the Introduction to Programming course, reinforcing understanding of course material through engaging discussions and practical exercises. Enhanced student learning experience by integrating SI strategies, Bloom’s Taxonomy and Meta-cognition, into session plans; achieved a 40% increase in active participation.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        CSE 1310
      </div>
    ),
  },
  {
    title: "Developement Lead",
    subtitle: "UTA Datathon",
    description:
      "Designed and developed a responsive website for UTA Datathon 2024, resulting in a 60% increase in participant registration and improved sponsor information access. Spearheaded the integration of Firebase into the website development process, streamlining data handling and improving analytics by 30%. Directed the development team, ensuring project completion and success, resulting in positive feedback from participants and sponsors.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/utadatathon-site-ss.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Orientation Leader",
    subtitle: "UTA New Maverick Orientation",
    description:
      "Successfully staffed 30+ Orientations for the 2023 Summer and Fall Semesters, welcoming and supporting over 10,000 students and guests at UTA to foster a strong sense of belonging within the university community. Collaborated with a team of 35+ Orientation Leaders to curate and deliver orientation activities including Small Group sessions, Guest Reception, and Evening Entertainment programs, resulting in a 25% increase in student involvement.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/orientation.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-4 lg:p-10 mb-8">
      <StickyScroll content={content} />
    </div>
  );
}
