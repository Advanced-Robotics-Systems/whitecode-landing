import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Header, Footer } from "@/sections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Project WhiteCode',
  description: 'Expert Custom Software & App Development Services designed to empower businesses worldwide.',
  icons: {
			icon: '/favicon.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextUIProvider>
					<Header />
					{children}
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
