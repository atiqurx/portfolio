import React from "react";
import TitleBar from "@/components/TitleBar";
import { Feather } from "lucide-react";
import TimelineLayout from "@/components/TimelineLayout";

const timelineItems = [
  {
    title: "ACM @ UT Arlington",
    subtitle: "Projects Director",
    description:
      "Led software projects like the ACM site, MavGrades, and a roommate matcher. Managed officer team, ran weekly syncs, and kept things moving.",
    date: "Aug. 2024 – Present",
    image: "/timeline/acm-team.JPG",
  },
  {
    title: "UTA Datathon 2024",
    subtitle: "Development Lead",
    description:
      "Built the event website, added Firebase, and boosted signups big time. Helped the dev team ship on time and kept sponsors happy.",
    date: "Feb. 2024 – Apr. 2024",
    image: "/timeline/datathon.png",
  },
  {
    title: "Academic Success Center",
    subtitle: "Peer Academic Coach",
    description:
      "Provided one-on-one academic support and guidance to help students improve their study habits and understanding.",
    date: "Aug. 2023 – May. 2024",
    image: "/timeline/asc.jpg",
  },
  {
    title: "New Maverick Orientation",
    subtitle: "Orientation Leader",
    description:
      "Welcomed 10k+ new students, hosted group sessions, and ran events. Helped students feel at home at UTA from day one.",
    date: "Jan. 2023 – Aug. 2023",
    image: "/timeline/orientation.JPG",
  },
  {
    title: "Honors College",
    subtitle: "Programming Board & Advocate",
    description:
      "Planned events and helped advocate for Honors students. Worked closely with staff to build a stronger community.",
    date: "Aug. 2022 – May. 2024",
    image: "/timeline/honors.jpeg",
  },
];

function page() {
  return (
    <>
      <div className="font-sans items-center justify-items-center min-h-screen py-10 md:py-20">
        <main className="w-[90%] md:w-[68%] mx-auto">
          <TitleBar
            label="Beyond Classroom"
            icon={<Feather className="w-4 h-4" />}
          />
          <TimelineLayout items={timelineItems} />
        </main>
      </div>
    </>
  );
}

export default page;
