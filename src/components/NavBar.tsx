"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  MailIcon,
  ShareIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  Layers,
  Copy,
  X,
  Check,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import BodyIcon from "@/app/icons/BodyIcon";
import ProjectsIcon from "@/app/icons/ProjectsIcon";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { useRouter, usePathname } from "next/navigation";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const router = useRouter();
  const pathname = usePathname();

  const pages = ["/", "/projects", "/tech-stack"];
  const currentIndex = pages.indexOf(pathname);

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === pages.length - 1;

  const goPrev = () => {
    if (!isFirstPage) {
      router.push(pages[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (!isLastPage) {
      router.push(pages[currentIndex + 1]);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("https://www.atiqurx.com/");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <>
      {/* Main Nav */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] rounded-sm px-4 py-2 flex items-center gap-3 shadow-lg backdrop-blur-md">
          <div className="items-center flex">
            <button
              className={`transition cursor-pointer ${
                showMenu ? "text-white" : "text-white/70 hover:text-white"
              }`}
              title="Slides"
              onClick={toggleMenu}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
          <div className="w-[1px] h-5 bg-zinc-700 mx-2" />

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white transition cursor-pointer">
              <Link
                href={"mailto:axr0966@mavs.uta.edu"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon className="w-[19px] h-[19px]" />
              </Link>
            </button>

            {/* Share Button with Dialog Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="text-white/60 hover:text-white transition cursor-pointer"
                  title="Share"
                >
                  <ShareIcon className="w-[18px] h-[18px]" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] text-white">
                <DialogHeader>
                  <DialogTitle>Share</DialogTitle>
                  <DialogClose className="absolute right-4 top-4 text-white/60 hover:text-white">
                    <X className="h-4 w-4" />
                  </DialogClose>
                  <DialogDescription className="text-sm text-white/60 mt-1">
                    Thanks for sharing portfolio!
                  </DialogDescription>
                </DialogHeader>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value="https://www.atiqurx.com/"
                    className="w-full bg-transparent border border-zinc-700 px-3 py-2 rounded-sm text-sm text-white/60 focus:outline-none  transition"
                  />
                  <button
                    onClick={handleCopy}
                    className="p-2 hover:bg-zinc-700 rounded-md transition"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/70" />
                    )}
                  </button>
                </div>

                <Link
                  href="https://www.linkedin.com/in/atiqurx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-1 bg-[rgb(36,38,43)] w-full flex justify-center items-center gap-2 py-[10px] border border-zinc-700 rounded-sm hover:brightness-110 transition text-sm">
                    <FaLinkedin className="w-4 h-4" />
                    Share Linkedin
                  </button>
                </Link>
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-[1px] h-5 bg-zinc-700 mx-2" />
          <div className="items-center flex">
            <button
              onClick={goPrev}
              disabled={isFirstPage}
              className={`transition cursor-pointer ${
                isFirstPage
                  ? "text-white/20 cursor-default"
                  : "text-white/70 hover:text-white"
              }`}
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              disabled={isLastPage}
              className={`transition cursor-pointer ${
                isLastPage
                  ? "text-white/20 cursor-default"
                  : "text-white/70 hover:text-white"
              }`}
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Download */}
        <Link
          href="/Atiqur_Rahman_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <button className="rounded-sm bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] text-white/60 hover:text-white transition cursor-pointer flex items-center gap-2 px-4 py-2 shadow-lg backdrop-blur-md">
            <Download className="w-4 h-4 text-orange-500" />
            <span className="text-[13px]">Get Resume</span>
          </button>
        </Link>
      </nav>

      {/* Slides Menu */}
      {showMenu && (
        <div className="fixed bottom-22 left-1/2 -translate-x-1/2 bg-[rgb(22,23,26)] border border-[rgb(40,42,49)] rounded-lg p-2 grid grid-cols-2 gap-2 z-50 shadow-xl backdrop-blur-md">
          {[
            { label: "Work & Edu", icon: BodyIcon, href: "/" },
            { label: "Projects", icon: ProjectsIcon, href: "/projects" },
            {
              label: "Tech Stack",
              icon: <Layers className="w-5 h-5" />,
              href: "/tech-stack",
            },
          ].map((item) => (
            <Link href={item.href} key={item.label}>
              <div className="flex items-center justify-center flex-col bg-[rgb(36,38,43)] text-white rounded-md px-14 py-8 cursor-pointer hover:brightness-110 transition">
                <div className="text-2xl mb-3 w-5 h-5">{item.icon}</div>
                <div className="text-[12px] font-medium">{item.label}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default NavBar;
