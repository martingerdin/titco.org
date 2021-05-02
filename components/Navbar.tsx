import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <nav className="navbar is-fixed-top has-shadow">
	<div className="navbar-brand">
	    <Link href="/" passHref>
		<a className="navbar-item">
		    <Logo />
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
		<Link href="/publications" passHref>
		    <a className="navbar-item">
			Publications
		    </a>
		</Link>
		<Link href="/projecs" passHref>
		    <a className="navbar-item">
			Projects
		    </a>
		</Link>
		<Link href="/data" passHref>
		    <a className="navbar-item">
			Data
		    </a>
		</Link>
	    </div>

	    <div className="navbar-end">
		<div className="navbar-item">
		    <div className="field is-grouped">
			<SocialLinks dropdown={`${isActive ? "is-up" : ""}`} />
		    </div>
		</div>
	    </div>
	</div>
    </nav>    
  );
}
