import React from "react";
import { Meteors } from "../../../components/ui/meteors";
import { FaJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiC, SiCplusplus, SiTypescript, SiFirebase, SiSqlite, SiNextdotjs} from 'react-icons/si';

const programmingLanguages = [
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <SiC /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "TypeScript", icon: <SiTypescript />},
    { name: "ReactJS", icon: <FaReact />},
    { name: "NextJS", icon: <SiNextdotjs />},
    { name: "Firebase", icon: <SiFirebase />},
    { name: "SQL", icon: <SiSqlite />},
    { name: "HTML", icon: <FaHtml5 />},
    { name: "CSS", icon: <FaCss3Alt />},
];

export function MeteorsDemo() {
  return (
    <div className="">
      <div className="relative w-[90%] lg:w-[45%] my-12 mx-auto">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 text-white z-50 m-auto">
            {programmingLanguages.map((language) => (
              <div key={language.name} className="text-base font-medium flex items-center p-2">
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
