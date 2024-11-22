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
	title: "Project WhiteCode | Custom Software & App Development Services",
	description:
		"Enhance your business with cutting-edge custom software and app development solutions tailored to your needs.",
	keywords:
		"custom software development, app development, software development company, software development services, tailored app solutions, Next.js app development, SaaS development company, enterprise software solutions, business automation tools",
	openGraph: {
		title: "Project WhiteCode | Custom Software & App Development Services",
		description:
			"Partner with Project WhiteCode for innovative custom software and app development. Drive growth with expert solutions.",
		url: "https://prowhitecode.com",
		siteName: "Project WhiteCode",
		images: [
			{
				url: "/preview.png",
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
		title: "Project WhiteCode | Custom Software & App Development Services",
		description:
			"Project WhiteCode delivers exceptional software and app development services tailored to your business goals.",
		images: ["/preview.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://prowhitecode.com",
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
