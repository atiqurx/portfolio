import React from "react";
import Head from "next/head";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Atiqur Rahman - Software Engineer</title>
        <meta
          name="description"
          content="Atiqur Rahman - Computer Science at University of Texas at Arlington. Software Engineer with a passion for building scalable applications and solving real-world problems."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="font-sans items-center justify-items-center min-h-screen py-10 md:py-20">
        <About />
      </div>
    </>
  );
}
