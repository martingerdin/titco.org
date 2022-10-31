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
    <nav style={isHome ? {justifyContent: "center"}: {}} className={`navbar ${isHome ? '' : 'is-fixed-top has-shadow'}`}>
	{isHome
	? (
	  <div className="buttons is-centered py-2">
	      <SocialLinks isHome={isHome} />
	  </div>
	)
	: (
	  <>
	      <div className="navbar-brand">
		  <Link href="/" passHref>
		      <a className="navbar-item">
			  <Logo size="2rem" />
		      </a>
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
		      <Link href="/" passHref>
			  <a className="navbar-item">
			      Home
			  </a>
		      </Link>
		      <Link href="/annual-meeting" passHref>
			  <a className={`navbar-item ${activePage === "Annual Meeting" ? "is-active" : ""}`}>
			      <span><img src="/firework.svg" /></span>
			      <span>Annual Meeting 2022</span>
			  </a>
		      </Link>
		      <Link href="/publications" passHref>
			  <a className={`navbar-item ${activePage === "Publications" ? "is-active" : ""}`}>
			      Publications
			  </a>
		      </Link>
		      <Link href="/projects" passHref>
			  <a className={`navbar-item ${activePage === "Projects" ? "is-active" : ""}`}>
			      Projects
			  </a>
		      </Link>
		      <Link href="/data" passHref>
			  <a className={`navbar-item ${activePage === "Data" ? "is-active" : ""}`}>
			      Data
			  </a>
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
