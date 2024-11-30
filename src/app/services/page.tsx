import {
  AllServices,
  Chat,
  Services2,
  ServicesDeliver,
  ServicesHero,
} from "@/sections";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://prowhitecode.com"),
	title: "Our Services | Project WhiteCode - Custom Software & App Development",
	description:
		"Explore the range of services offered by Project WhiteCode, including web applications, mobile apps, desktop software, AI solutions, IoT systems, and more. Tailored to meet your business needs.",
	keywords:
		"software development services, web application development, mobile app development, desktop software solutions, AI and image processing, IoT systems, enterprise application services, dedicated software team",
	openGraph: {
		title:
			"Our Services | Project WhiteCode - Software & App Development Experts",
		description:
			"Learn about the comprehensive software and app development services offered by Project WhiteCode. From web and mobile apps to AI solutions and IoT systems, we deliver tailored solutions for businesses.",
		url: "https://prowhitecode.com/services",
		siteName: "Project WhiteCode",
		images: [
			{
				url: "/preview.png",
				width: 1200,
				height: 630,
				alt: "Project WhiteCode Services - Custom Software Development",
				type: "image/png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Our Services | Project WhiteCode - Custom Software Solutions",
		description:
			"Discover Project WhiteCode's range of services, including web, mobile, desktop applications, AI solutions, and IoT systems. Custom-tailored for your business success.",
		images: ["/preview.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://prowhitecode.com/services",
	},
};

const Services = () => {
  return (
    <main>
      <Services2 />
      <ServicesDeliver />
      <Chat />
    </main>
  );
};

export default Services;
