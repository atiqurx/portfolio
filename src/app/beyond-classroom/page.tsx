import React from "react";
import Head from "next/head";
import TitleBar from "@/components/TitleBar";
import { Feather } from "lucide-react";

function page() {
  return (
    <>
      <div className="font-sans items-center justify-items-center min-h-screen py-10 md:py-20">
        <main className="w-[90%] md:w-[68%] mx-auto">
          <TitleBar
            label="Beyond Classroom"
            icon={<Feather className="w-4 h-4" />}
          />
        </main>
      </div>
    </>
  );
}

export default page;
