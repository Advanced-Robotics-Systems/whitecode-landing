"use client";
import { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";
import {navLinks} from "@/data";
import Image from "next/image";
import Logo from "@/assets/images/Logo_White.png"
import { usePathname } from "next/navigation";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

	return (
		<Navbar
			shouldHideOnScroll
			onMenuOpenChange={setIsMenuOpen}
			maxWidth="full"
			className="!bg-black"
      height="5rem"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[3px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-accent",
        ],
      }}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="md:hidden text-white"
				/>
				<NavbarBrand>
          <Link href="/"><Image src={Logo} alt="White Code" width={0} height={0} className="w-24" /></Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden md:flex gap-12 tracking-tight" justify="center">
				{navLinks.map((item, index) => (
					<NavbarItem key={index} isActive={pathname === item.link}>
						<Link href={item.link} className={`${pathname === item.link && "!text-accent"}`}>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarMenu className="bg-[#000000de]"> 
				{navLinks.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link
							color={
								index === 2
									? "primary"
									: index === navLinks.length - 1
									? "danger"
									: "foreground"
							}
							className="w-full"
							href="#"
							size="lg"
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
};

export default Header;