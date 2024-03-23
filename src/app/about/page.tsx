"use client";
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect";
export function AboutPage() {
  const words = [
    {
      text: "Honors",
    },
    {
      text: "Computer",
    },
    {
      text: "Science",
    },
    {
      text: "at",
    },
    {
      text: "UT Arlington.",
      className: "text-blue-500 text-indigo-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[100rem]  ">

      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">

      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
export default AboutPage;