"use client";
import React, { useState } from "react";
import { SparklesPreview } from "./sparkles";
import { ThreeDCardDemo } from "./3d-card";
import CommitsTable from "../../components/ui/commitsTable";

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const cards = [
    {
      title: "LegalAI",
      description:
        "LegalAI is an AI platform that simplifies legal document review by summarizing contracts, spotting risks, and offering key insights with advanced language models.",
      imageUrl: "/legalai.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Github",
      buttonLink2: "https://github.com/atiqurx/legalAI",
      technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "PropelAuth", "UploadThing", "Open AI"],
      badge: "HackSMU VI Winner", 
    },
    {
      title: "trasva.com",
      description:
        "A travel social platform where users can share their journeys, discover new experiences, and connect with a like-minded community.",
      imageUrl: "/trasva.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Website",
      buttonLink2: "https://trasva.com/",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "Clerk",
      ],
    },
    {
      title: "Service Request System",
      description:
        "An Android application developed with Java that enables users to place service requests to selected service providers.",
      imageUrl: "/srs-context.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Github",
      buttonLink2: "https://github.com/atiqurx/service-request-system",
      technologies: ["Java", "Android Studio", "Firebase"],
    },
    {
      title: "UTA Datathon 2024 Website",
      description:
        "Official website of UTA Datathon 2024 for registrations and general information.",
      imageUrl: "/utadatathon-site-ss.png",
      buttonText1: "Website",
      buttonLink1: "https://utadatathon.tech",
      buttonText2: "Github",
      buttonLink2: "https://github.com/utadatathon/utadatathon2024-website",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Vercel",
      ],
    },
    {
      title: "Goblin",
      description:
        "A robust expense management web app built with .NET, designed to streamline tracking, managing, and analyzing your financial transactions effortlessly.",
      imageUrl: "/goblin.png",
      buttonText1: "Website",
      buttonLink1:
        "https://gob-lin-bkeneab8ccdmhhda.centralus-01.azurewebsites.net/",
      buttonText2: "Github",
      buttonLink2: "https://github.com/atiqurx/goblin",
      technologies: ["C#", ".NET", "SQL", "Azure", "Docker"],
    },
    {
      title: "ACM UTA Website",
      description:
        "Official website of Association for Computing Machinery (ACM) @ UTA.",
      imageUrl: "/acm-uta-ss.png",
      buttonText1: "Website",
      buttonLink1: "https://acmuta.com",
      buttonText2: "Github",
      buttonLink2: "https://github.com/acmuta/acmuta-site",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase Firestore",
      ],
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Exploratory data analysis and prediction model for credit card fraud detection.",
      imageUrl: "/credit-fraud.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Kaggle",
      buttonLink2:
        "https://www.kaggle.com/code/atiqurrahman75/credit-card-fraud-detection",
      technologies: ["Python", "Pandas", "Scikit-Learn"],
    },
    {
      title: "CBRE Asset Management",
      description:
        "A machine learning model that predicts the maintenance needs in commercial building assets.",
      imageUrl: "/cbre.jpg",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Github",
      buttonLink2: "https://github.com/atiqurx/cbre_asset_condition_monitor",
      technologies: ["Python", "Random Forest", "K-means"],
    },
  ];

  const availableTechnologies = [
    "Python",
    "C#",
    "Java",
    "TypeScript",
    "Next.js",
    ".NET",
    "SQL",
    "MongoDB",
    "Firebase",
  ];

  // Handle technology filter toggle
  const toggleTechnology = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  // Filter cards based on selected technologies
  const filteredCards = selectedTech.length
    ? cards.filter((card) =>
        selectedTech.some((tech) => card.technologies.includes(tech))
      )
    : cards;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">
      <SparklesPreview />

      <section id="projects" className="p-5">
        <div className="text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Explore Projects
        </div>
        <h4 className="my-4 text-neutral-500 text-sm text-center display-block ">
          Filter by Tech
        </h4>

        {/* Filter Buttons */}
        <div className="w-full flex justify-center mb-7">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {availableTechnologies.map((tech) => (
              <button
                key={tech}
                className={`border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full ${
                  selectedTech.includes(tech) ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => toggleTechnology(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Display filtered cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {filteredCards.map((card, index) => (
            <ThreeDCardDemo
              key={index}
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              buttonText1={card.buttonText1}
              buttonLink1={card.buttonLink1}
              buttonText2={card.buttonText2}
              buttonLink2={card.buttonLink2}
              technologies={card.technologies}
              badge={card.badge} 
            />
          ))}
        </div>
        <div className="mx-auto">
          <CommitsTable />
        </div>
      </section>
    </main>
  );
}
