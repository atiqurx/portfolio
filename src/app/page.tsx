"use client";
import React from "react";
import { SparklesCore } from "../../components/ui/sparkles";
import Image from "next/image";
import { SparklesPreview } from "./sparkles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SparklesPreview />
    </main>
    


  );
}
