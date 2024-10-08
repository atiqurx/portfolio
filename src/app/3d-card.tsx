import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";

export function ThreeDCardDemo({
  title,
  description,
  imageUrl,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2,
  technologies,
  badge,
}: {
  title: string;
  description: string;
  imageUrl: string;
  buttonText1: string;
  buttonLink1: string;
  buttonText2: string;
  buttonLink2: string;
  technologies: string[];
  badge?: string; 
}) {
  return (
    <CardContainer className="inter-var relative">
      {badge && (
        <div className="absolute top-3 right-2 px-2 py-1 z-10">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>{badge}</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button>
        </div>
      )}
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="80"
          className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-sm font-semibold mt-8 dark:text-neutral-300"
        >
          Technologies: {technologies.join(", ")}
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <a
            href={buttonLink1}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {buttonText1}
          </a>
          <a
            href={buttonLink2}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            {buttonText2}
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
