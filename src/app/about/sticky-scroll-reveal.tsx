"use client";
import React from "react";
import { StickyScroll } from "../../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Developer",
    subtitle: "UTA Office of Information Technology",
    description:
      "Web Publishing Services.",
    timeline: "Oct. 2024 - Present",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        {/* <Image
          src="/acm-team.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="ACM UTA Team"
        /> */}
        UTA OIT
      </div>
    ),
  },
  {
    title: "Director - ACM Create",
    subtitle: "ACM @ UTA",
    description:
      "Lead the development of software projects, including websites and applications, while managing a team of officers and overseeing project completion. Coordinate weekly meetings, ensuring the successful execution of initiatives like the official ACM website, UTA Grades site and a roommate matching app.",
    timeline: "Aug. 2024 - Present",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/acm-team.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="ACM UTA Team"
        />
      </div>
    ),
  },
  {
    title: "Supplemental Instruction Leader - CSE",
    subtitle: "UTA Academic Success Center",
    description:
      "Facilitated interactive group learning sessions for a cohort of 58 students in the Introduction to Programming course, reinforcing understanding of course material through engaging discussions and practical exercises. Enhanced student learning experience by integrating SI strategies, Bloom’s Taxonomy and Meta-cognition, into session plans; achieved a 40% increase in active participation.",
    timeline: "Aug. 2023 - Oct. 2023",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/si-asc.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="SI Leaders"
        />
      </div>
    ),
  },
  {
    title: "Developement Lead",
    subtitle: "UTA Datathon",
    description:
      "Designed and developed a responsive website for UTA Datathon 2024, resulting in a 60% increase in participant registration and improved sponsor information access. Spearheaded the integration of Firebase into the website development process, streamlining data handling and improving analytics by 30%. Directed the development team, ensuring project completion and success, resulting in positive feedback from participants and sponsors.",
    timeline: "Feb. 2024 - Apr. 2024",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/utadatathon-site-ss.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UTA Datathon Website 2024"
        />
      </div>
    ),
  },
  {
    title: "Orientation Leader",
    subtitle: "UTA New Maverick Orientation",
    description:
      "Successfully staffed 30+ Orientations for the 2023 Summer and Fall Semesters, welcoming and supporting over 10,000 students and guests at UTA to foster a strong sense of belonging within the university community. Collaborated with a team of 35+ Orientation Leaders to curate and deliver orientation activities including Small Group sessions, Guest Reception, and Evening Entertainment programs, resulting in a 25% increase in student involvement.",
    timeline: "Jan. 2023 - Aug. 2023",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/orientation.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UTA Orientation Leaders 2023"
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
