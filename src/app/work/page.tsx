import { ImageCarousel } from "@/components";
import { carouselProjects } from "@/data";
import { AllWorks, Chat, WorkHero } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Project WhiteCode - Innovative Software Solutions",
  description:
    "Explore the portfolio of Project WhiteCode. See our innovative software solutions, including web and mobile apps, enterprise systems, and custom AI projects.",
  keywords:
    "Project WhiteCode portfolio, software development portfolio, web application projects, mobile app projects, enterprise software solutions, custom AI solutions, innovative software projects, successful client work",
  openGraph: {
    title: "Our Work | Project WhiteCode - Software Development Portfolio",
    description:
      "Discover the exceptional software solutions crafted by Project WhiteCode. Explore our portfolio of innovative projects, from web and mobile applications to enterprise systems.",
    url: "https://prowhitecode.com/our-work",
    siteName: "Project WhiteCode",
    images: [
      {
        url: "/preview.png", // Need to replace with page ss
        width: 1200,
        height: 630,
        alt: "Project WhiteCode Portfolio - Innovative Software Projects",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Project WhiteCode - Portfolio of Innovative Software Solutions",
    description:
      "See how Project WhiteCode delivers exceptional software solutions. Explore our portfolio of web, mobile, and custom software projects tailored to client needs.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://prowhitecode.com/our-work",
  },
};

const Work = () => {
	return (
		<main>
			<WorkHero />
			<ImageCarousel projects={carouselProjects} />
			<AllWorks />
			<Chat />
		</main>
	);
};

export default Work;
