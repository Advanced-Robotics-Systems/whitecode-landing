"use client";
import { ICONS } from "@/utils/icons";
import { motion } from "framer-motion";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";

const Mission = () => {
	return (
		<section className="bg-sky-15 padding-responsive">
			<article className="flex flex-col md:flex-row-reverse gap-12 lg:gap-16 xl:gap-20 items-center font-jura bg-white px-5 py-7 md:px-7 md:py-10 rounded-2xl">
				<motion.aside
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className="lg:w-2/5 "
				>
					<header className="space-y-3 md:space-y-4 lg:space-y-5">
						<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-light-indigo">
							Our Mission
						</h2>
						<p className="text-base md:text-lg lg:text-xl xl:text-2xl">
							We position ourselves to provide affordable IT solutions for all
							sorts of business sizes, so you don&apos;t have to worry if
							you&apos;re an SME. Our budget is tailored according to the size
							of your business.
						</p>
					</header>
					<Button
						as={Link}
						href="/about"
						radius="full"
						size="md"
						variant="ghost"
						className="border-1 border-black hover:!bg-transparent hover:scale-105 mt-8 md:mt-10 lg:mt-16"
						endContent={ICONS.arrow_right}
					>
						<div className=" py-4">
							<span className="text-base md:text-xl lg:text-2xl">About Us</span>
						</div>
					</Button>
				</motion.aside>

				<motion.figure
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					className="lg:w-3/5 h-full"
				>
					<Image src="/mission.jpeg" alt="Mission" height="100%" />
				</motion.figure>
			</article>
		</section>
	);
};

export default Mission;
