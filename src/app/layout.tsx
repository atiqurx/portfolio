import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo } from "./floating-navbar";
import { FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Atiqur Rahman",
    template: "%s - Atiqur Rahman"
  },
  description: "Portfolio of Atiqur Rahman. Software Engineering Projects and Work Experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      {/* <!-- Google tag (gtag.js) --> */}
        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DN94C9WQ9B"
        strategy="afterInteractive"
      />
      
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DN94C9WQ9B');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black`}>
        <div>
          <FloatingNavDemo />
        </div>

        {children}

        <footer className="w-11/12 min-h-48 mx-auto">
          <hr className="border-t border-stone-600" />

          <div className="flex justify-between lg:p-8 p-4 text-stone-300">
            {/* Copyright */}
            <div className="mr-8">
              <h1>&copy; 2024 Atiqur Rahman.</h1>
              <p>UI components by ui.aceternity.com. All rights reserved.</p>
            </div>

            {/* Social Media */}
            <div className="flex">
              <div className="mr-4">
                <a
                  href="https://github.com/atiqurx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              </div>
              {/* <div className="mr-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaKaggle size={20} />
                </a>
              </div> */}
              <div>
                <a
                  href="https://www.linkedin.com/in/atiqurx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
