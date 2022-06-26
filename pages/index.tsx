import Link from "next/link";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
	<section className="hero is-fullheight">
	    <div className="hero-header">
		<Navbar isHome={true} activePage="home" />
	    </div>
	    <div className="hero-body">
		<div className="container">
		    <div className="columns is-centered">
			<div className="column is-8">
			    <div className="content has-text-centered">
				<span><Logo size="5rem" /></span>
				<p className="subtitle is-size-4">Improving Trauma Care Through Research</p>
			    </div>				
			    <div className="content has-text-centered is-size-6">
				Towards Improved Trauma Care Outcomes is a
				consortium of researchers and clinicians who aim to
				improve trauma care through research. Started in
				2012 our consortium now conducts research and trauma
				quality improvement initiatives in centres across India.
			    </div>
			</div>
		    </div>
		    <div className="buttons is-centered are-medium">
			<Link href="/publications">
			    <a className="button is-primary">
				Publications
			    </a>
			</Link>
			<Link href="/projects">
			    <a className="button is-primary">Projects</a>
			</Link>
			<Link href="/data">
			    <a className="button is-primary">Data</a>
			</Link>
		    </div>
		</div>
	    </div>
	    <div className="hero-footer has-background-light px-5 py-5">
		<div className="container has-text-centered">
		    <p>Copyright &copy; {new Date().getUTCFullYear()} TITCO | 
			Made with <Link href="https://nextjs.org/"><a>Next.js</a></Link>, and{" "}
    <Link href="https://bulma.io/"><a>Bulma</a></Link>{" "}
    | This website is open source on <Link href="https://github.com/titco/titco.org/"><a>GitHub</a></Link>{" "} | Please submit feature requests and bug reports <Link href="https://github.com/titco/titco.org/issues"><a>here</a></Link>
    		    </p>
		</div>
	    </div>
	</section>
    </>
  )
}
