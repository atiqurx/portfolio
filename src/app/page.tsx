"use client";
import React from "react";
import { SparklesPreview } from "./sparkles";
import { ThreeDCardDemo } from "./3d-card";

export default function Home() {
  const cards = [
    {
      title: "trasva.com",
      description:
        "A travel social platform where users can share their journeys, discover new experiences, and connect with a like-minded community.",
      imageUrl: "/trasva.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Website",
      buttonLink2: "https://trasva.com/",
      technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Clerk"],
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
        "Tailwind CSS",
        "Firebase Firestore",
        "Firebase Auth",
      ],
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
      technologies: ["Next.js", "Tailwind CSS", "Firebase Firestore"],
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">
      <SparklesPreview />

      <section id="projects" className="p-5">
        <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Explore Projects
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {cards.map((card, index) => (
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
            />
          ))}
        </div>
      </section>
    </main>
  );
}
