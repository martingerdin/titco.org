import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "./Navbar";
import capitalise from "../lib/capitalise";

interface layoutProps {
  children: ReactElement | ReactElement[],
  title?: string
}

export default function Layout({children, title = "Title"}: layoutProps) {
  useEffect(() => {document.querySelector("body").classList.add("has-navbar-fixed-top")})

  const router = useRouter();
  const { pathname } = router;
  const pagename = capitalise(pathname.substring(1));
  
  return (
    <>
	<Navbar activePage={pagename}/>
	<section className="section">
	    <nav className="breadcrumb is-medium" aria-label="breadcrumbs">
		<ul>
		    <li><Link href="/"><a>Home</a></Link></li>
		    <li className="is-active"><Link href={pathname}><a>{pagename}</a></Link></li>
		</ul>
	    </nav>
	</section>
	<section className="section">
	    <div className="container has-text-centered">
		<h1 className="title">{title}</h1>		    
	    </div>
	</section>
	<section className="section">
	    <p>Path {pathname}</p>
	    {children}
	</section>
    </>
  );
}
