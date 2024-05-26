import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "./floating-navbar";
import { FaGithub, FaKaggle, FaLinkedin } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atiqur Rahman",
  description: "Atiqur Rahman Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div>
          <FloatingNavDemo />
        </div>
        
        {children}

        <footer className="w-11/12 min-h-48 mx-auto">
          <hr className="border-t border-stone-600"/>

          <div className="flex justify-between lg:p-8 p-4 text-stone-300">
            {/* Copyright */}
            <div className="mr-5">
              <h1>Atiqur Rahman</h1>
              <p> &copy; 2024 Atiqur Rahman. All rights reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex">
              <div className="mr-4">
                <a href="https://github.com/atiqurx" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              </div>
              <div className="mr-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaKaggle size={20} />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/atiqurx" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      
      </body>
    </html>
  );
}
