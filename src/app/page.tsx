import {
	Chat,
	Clients,
	ContactChat,
	Discover,
	Hero,
	Map,
	Mission,
	Mission2,
	Project,
	ReviewFutureAwaits,
	Services,
	Services2,
	Solution,
	Values,
	Vision,
	WoorkProcess,
} from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://prowhitecode.com"),
	title: "Project WhiteCode | Top Custom Software & App Development Services",
	description:
		"Transform your business with Project WhiteCode. We specialize in delivering cutting-edge custom software and app development solutions to meet your unique needs.",
	keywords:
		"custom software development, app development, software development company, software development services, tailored app solutions, Next.js app development, SaaS development company, enterprise software solutions, business automation tools",
	openGraph: {
		title: "Project WhiteCode | Custom Software & App Development Experts",
		description:
			"Discover how Project WhiteCode can elevate your business with innovative software and app development solutions. Your trusted partner in digital transformation.",
		url: "https://prowhitecode.com",
		siteName: "Project WhiteCode",
		images: [
			{
				url: "/home-preview.png",
				width: 1200,
				height: 630,
				alt: "Project WhiteCode - Custom Software Development",
				type: "image/png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Project WhiteCode | Transforming Businesses with Custom Software",
		description:
			"Partner with Project WhiteCode for tailored software and app development solutions. Let us help you achieve your business goals.",
		images: ["/home-preview.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://prowhitecode.com",
	},
	other: {
		"application/ld+json": JSON.stringify({
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Project WhiteCode",
			"url": "https://prowhitecode.com",
			"logo": "https://prowhitecode.com/favicon.png",
			"sameAs": [
				"https://www.facebook.com/YourPage",
				"https://twitter.com/YourHandle",
				"https://www.linkedin.com/company/project-whitecode/",
			],
			"description":
				"Project WhiteCode offers custom software and app development services tailored to businesses worldwide.",
			"contactPoint": {
				"@type": "ContactPoint",
				"telephone": "+880 1622-257180",
				"contactType": "Customer Service",
				"areaServed": "Worldwide",
				"availableLanguage": ["English"],
			},
		}),
	},
};

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			{/* <Mission />
      <Project /> */}
			<Solution />
			<WoorkProcess />
			{/* <Services /> */}
			<Services2 />
			<Mission2 />
			<Map />
			<Clients />
			<Discover />
			{/* <Vision /> */}
			{/* <Values /> */}
			{/* <Chat /> */}
			<ReviewFutureAwaits />
		</main>
	);
}
