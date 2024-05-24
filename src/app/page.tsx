"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import { SparklesPreview } from "./sparkles";
import { ThreeDCardDemo } from "./3d-card"


export default function Home() {
  const cards = [
    {
      title: "Project 1",
      description: "Description for project 1",
      imageUrl: "/project1.png",
      buttonText1: "Button 1",
      buttonText2: "Button 2"
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      imageUrl: "/project2.png",
      buttonText1: "Button 1",
      buttonText2: "Button 2"
    },
    // Add more card data as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">

      <div>
        <SparklesPreview />
      </div>

      <section id="projects" >
        <div className=" text-[3rem] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Explore Projects
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {cards.map((card, index) => (
              <ThreeDCardDemo
                key={index}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                buttonText1={card.buttonText1}
                buttonText2={card.buttonText2}
              />
            ))}
        </div>

      </section>
      
      
    </main>
  );
}
