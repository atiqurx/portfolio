"use client";
import React from "react";
import { SparklesPreview } from "./sparkles";
import { ThreeDCardDemo } from "./3d-card";

export default function Home() {
  const cards = [
    {
      title: "Trasva.com",
      description:
        "Trasva.com is a social platform designed for travelers to share and discover travel experiences. Users can create accounts to post about their journeys, upload images, and interact with the community through reactions, comments, and shares.",
      imageUrl: "/trasva.png",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Website",
      buttonLink2: "https://trasva.com/",
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
    },
    {
      title: "CBRE Asset Management",
      description:
        "A machine learning model that predicts the maintenance needs in commercial building assets",
      imageUrl: "/cbre.jpg",
      buttonText1: "",
      buttonLink1: "#",
      buttonText2: "Github",
      buttonLink2: "https://github.com/atiqurx/cbre_asset_condition_monitor",
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
            />
          ))}
        </div>
      </section>
    </main>
  );
}
