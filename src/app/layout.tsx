import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atiqur Rahman Portfolio",
  description:
    "Software Engineer building fast, scalable apps in full-stack, cloud, and ML. Projects, experience, and tech stack.",
  openGraph: {
    title: "Atiqur Rahman | Software Engineer Portfolio",
    description:
      "Explore my projects, tech stack, and experience as a full-stack developer with a focus on impactful, scalable solutions.",
    url: "https://www.atiqurx.com",
    siteName: "AtiqurX",
    images: [
      {
        url: "https://www.atiqurx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atiqur Rahman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atiqur Rahman | Software Engineer Portfolio",
    description:
      "Explore my projects, tech stack, and experience as a full-stack developer.",
    images: ["https://www.atiqurx.com/og-image.png"],
    creator: "@atiqur_x",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <NavBar />
      </body>
    </html>
  );
}
