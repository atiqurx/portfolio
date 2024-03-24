"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Honors",
    },
    {
      text: "Computer Science",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "at",
    },
    {
      text: "UT",
    },
    {
      text: "Arlington.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
