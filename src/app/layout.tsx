import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

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
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Atiqur Rahman",
              url: "https://www.atiqurx.com",
              image: "https://www.atiqurx.com/atiqur.jpg",
              award: [
                "Best AI Application with Cloudflare - HackTX 2024",
                "Second Place (Main Track) and Best AI Project with Databricks - HackUTA 6",
                "MLH - Best Use of MongoDB - HackSMU VI",
              ],
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "The University of Texas at Arlington",
                url: "https://www.uta.edu",
              },
              memberOf: {
                "@type": "Organization",
                name: "ACM @ UT Arlington",
                url: "https://acmuta.com",
              },
              sameAs: [
                "https://www.linkedin.com/in/atiqurx",
                "https://github.com/atiqurx",
                "https://devpost.com/atiqurx",
                "https://www.theshorthorn.com/news/honors-college-hosts-mardi-gras-celebration-to-build-community-for-students/article_1a06ca40-ad60-11ed-8832-3f69f4c39387.html",
              ],
              hasPart: {
                "@type": "WebApplication",
                name: "MavGrades",
                url: "https://mavgrades.com",
                codeRepository: "https://github.com/acmuta/mavgrades",
                contributor: {
                  "@type": "Person",
                  name: "Atiqur Rahman",
                  url: "https://www.atiqurx.com",
                },
              },
            }),
          }}
        />
        <link
          rel="canonical"
          href="https://www.atiqurx.com/Atiqur_Rahman_Resume.pdf"
        />
        <link
          rel="alternate"
          type="application/pdf"
          href="https://www.atiqurx.com/Atiqur_Rahman_Resume.pdf"
          title="Atiqur Rahman Resume"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <NavBar />
      </body>
    </html>
  );
}
