import { Addresses, ContactChat, ContactForm } from "@/sections";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Project WhiteCode - Custom Software & App Development",
	description:
		"Get in touch with Project WhiteCode for custom software and app development services. Contact us to discuss your project and achieve your business goals.",
	keywords:
		"contact Project WhiteCode, software development inquiries, app development support, custom software services, software consulting, business solutions, software support team",
	openGraph: {
		title: "Contact Us | Project WhiteCode",
		description:
			"Have questions? Contact Project WhiteCode for innovative software and app development solutions tailored to your needs. Let's work together!",
		url: "https://prowhitecode.com/contact",
		siteName: "Project WhiteCode",
		images: [
			{
				url: "/preview.png",
				width: 1200,
				height: 630,
				alt: "Contact Project WhiteCode - Software Development Experts",
				type: "image/png",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Contact Project WhiteCode - Let's Build Your Next Software Solution",
		description:
			"Reach out to Project WhiteCode for custom software and app development services tailored to your needs.",
		images: ["/preview.png"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://prowhitecode.com/contact",
	},
};

const Contact = () => {
	return (
		<div>
			<ContactChat />
			{/* <ContactForm /> */}
			<Addresses />
		</div>
	);
};

export default Contact;
