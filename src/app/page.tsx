"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import { SparklesPreview } from "./sparkles";
import { FloatingNavDemo } from "./floating-navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main">
      <div>
        <FloatingNavDemo />
      </div>

      <div>
        <SparklesPreview />
      </div>
      
    </main>
  );
}
