import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

interface navbarProps {
	activePage: string;
	isHome?: boolean;
}

export default function Navbar({ isHome = false, activePage }: navbarProps) {
	const [isActive, setIsActive] = useState(false);

	return (
		<nav style={isHome ? { justifyContent: "center" } : {}} className={`navbar ${isHome ? '' : 'is-fixed-top has-shadow'}`}>
			{isHome
				? (
					<div className="buttons is-centered py-2">
						<SocialLinks isHome={isHome} />
					</div>
				)
				: (
					<>
						<div className="navbar-brand">
							<Link href="/" className="navbar-item">
								<Logo size="2rem" />
							</Link>
							<div
								className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
								data-target="navbarExampleTransparentExample"
								onClick={() => setIsActive(!isActive)}
							>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<div
							id="navbarExampleTransparentExample"
							className={`navbar-menu ${isActive ? 'is-active' : ''}`}
						>
							<div className="navbar-start">
								<Link href="/" className="navbar-item">
									Home
								</Link>
								{/*
								<Link href="/annual-meeting" className={`navbar-item ${activePage === "Annual Meeting" ? "is-active" : ""}`}>
									<span><img src="/firework.svg" /></span>
									<span>Annual Meeting 2022</span>
								</Link>
							*/}
								<Link href="/publications" className={`navbar-item ${activePage === "Publications" ? "is-active" : ""}`}>
									Publications
								</Link>
								<Link href="/projects" className={`navbar-item ${activePage === "Projects" ? "is-active" : ""}`}>
									Projects
								</Link>
								<Link href="/data" className={`navbar-item ${activePage === "Data" ? "is-active" : ""}`}>
									Data
								</Link>
							</div>
							<div className="navbar-end">
								<SocialLinks />
							</div>
						</div>
					</>
				)}
		</nav>
	);
}
