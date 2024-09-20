import React from "react";
import { Meteors } from "../../../components/ui/meteors";
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiFirebase,
  SiSqlite,
  SiNextdotjs,
  SiMongodb,
  SiCsharp,
  SiAmazonaws,
  SiDocker,
  SiTensorflow,
  SiOpencv,
  SiAndroidstudio,
  SiLinux,
  SiDjango,
  SiFlask,
  SiMicrosoftazure,
} from "react-icons/si";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaNodeJs,
  FaRProject,
  FaDatabase,
  FaLaptopCode,
  FaLaptop,
} from "react-icons/fa";

const programmingLanguagesAndTechnologies = [
  { name: "Python", icon: <FaPython /> },
  { name: "C", icon: <SiC /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "NextJS", icon: <SiNextdotjs /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "SQL", icon: <SiSqlite /> },
  { name: "NoSQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Azure", icon: <SiMicrosoftazure /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "OpenCV", icon: <SiOpencv /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "Unix", icon: <SiLinux /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "React Native", icon: <FaLaptopCode /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
];

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="relative w-[90%] lg:w-[60%] my-12 mx-auto ">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6 text-white z-50 m-auto">
            {programmingLanguagesAndTechnologies.map((language) => (
              <div
                key={language.name}
                className="text-base font-medium flex items-center p-2"
              >
                <span className="mr-2 opacity-60">{language.icon}</span>
                {language.name}
              </div>
            ))}
          </div>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
