import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import DropdownLinks from "./DropdownLinks";

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
		<a className="navbar-item" href="https://versions.bulma.io/0.7.0/">
		    Home
		</a>
		<div className="navbar-item has-dropdown is-hoverable">
		    <a className="navbar-link" href="/documentation/overview/start/">
			Docs
		    </a>
		    <div className="navbar-dropdown">
			<a className="navbar-item" href="/documentation/overview/start/">
			    Overview
			</a>
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/modifiers/syntax/">
			    Modifiers
			</a>
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/columns/basics/">
			    Columns
			</a>
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/layout/container/">
			    Layout
			</a>
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/form/general/">
			    Form
			</a>
			<hr className="navbar-divider" />
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/elements/box/">
			    Elements
			</a>
			<a className="navbar-item" href="https://versions.bulma.io/0.7.0/documentation/components/breadcrumb/">
			    Components
			</a>
		    </div>
		</div>
	    </div>

	    <div className="navbar-end">
		<div className="navbar-item">
		    <div className="field is-grouped">
			<DropdownLinks />
		    </div>
		</div>
	    </div>
	</div>
    </nav>    
  );
}
