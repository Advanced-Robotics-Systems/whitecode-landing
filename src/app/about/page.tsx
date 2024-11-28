import {
  AboutHero,
  AboutHero2,
  AboutMission,
  AboutValuesNew,
  CareerChat,
  Chat,
  ChooseUs,
  Clients,
  Map,
  Services2,
  Story,
} from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://prowhitecode.com"),
  title: "About Us | Project WhiteCode - Custom Software & App Development",
  description:
    "Discover the mission, story, and core values of Project WhiteCode. Learn how we create impactful software and app development solutions tailored to businesses worldwide.",
  keywords:
    "about Project WhiteCode, company mission, software development values, software development company story, custom software and app development team, global software services, innovative software solutions",
  openGraph: {
    title: "About Us | Project WhiteCode - Custom Software & App Development",
    description:
      "Explore our mission, story, and values at Project WhiteCode. We specialize in innovative software and app development services that empower businesses worldwide.",
    url: "https://prowhitecode.com/about",
    siteName: "Project WhiteCode",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Project WhiteCode - About Us",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Project WhiteCode - Custom Software & App Development",
    description:
      "Learn about Project WhiteCode's mission, story, and values. We deliver exceptional custom software and app development solutions to clients globally.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://prowhitecode.com/about",
  },
};

const About = () => {
  return (
    <main>
      <AboutHero2 />
      {/* <AboutHero /> */}
      <AboutMission />
      <Services2 />
      <ChooseUs />
      {/* <Story /> */}
      {/* <AboutValuesNew /> */}
      <Map />
      <Clients />
      <CareerChat />
      {/* <Chat /> */}
    </main>
  );
};

export default About;
