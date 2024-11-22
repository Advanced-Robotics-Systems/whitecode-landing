import { CareerChat, DiscoverCareer } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career | Project WhiteCode - Join Our Team",
  description:
    "Explore career opportunities at Project WhiteCode. Join our team of software developers, designers, and project managers to create innovative software solutions.",
  keywords:
    "join Project WhiteCode, software development careers, software design jobs, project management positions, software development team, software development jobs, software development careers",
  openGraph: {
    title: "Career | Project WhiteCode - Join Our Team",
    description:
      "Discover career opportunities at Project WhiteCode. Join our team of software developers, designers, and project managers to create innovative software solutions.",
    url: "https://prowhitecode.com/career",
    siteName: "Project WhiteCode",
    images: [
      {
        url: "/home-preview.png",
        width: 1200,
        height: 630,
        alt: "Career Opportunities at Project WhiteCode",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career | Project WhiteCode - Join Our Team",
    description:
      "Explore career opportunities at Project WhiteCode. Join our team of software developers, designers, and project managers to create innovative software solutions.",
    images: ["/home-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://prowhitecode.com/career",
  },
};

const Career = () => {
  return (
    <main>
      <DiscoverCareer />
      <CareerChat />
    </main>
  );
};

export default Career;
