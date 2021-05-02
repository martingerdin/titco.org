import Link from "next/link";
import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiCheck, mdiGithub, mdiSlack, mdiBookOpen, mdiDatabase, mdiSend } from "@mdi/js";
import Image from "next/image";
import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
	<section className="hero is-fullheight">
	    <div className="hero-header">
		<div className="container has-text-centered my-4">
		    <SocialLinks />
		</div>
	    </div>
	    <div className="hero-body">
		<div className="container">
		    <div className="columns is-centered">
			<div className="column is-8">
			    <div className="content has-text-centered">
				<Logo size="1" />
				<p className="subtitle">Improving Trauma Care Through Research</p>
			    </div>				
			    <div className="content">
				Towards Improved Trauma Care Outcomes (TITCO) is a
				consortium of researchers and clinicians who aim to
				improve trauma care through research. Started in
				2012 our consortium now conducts research and trauma
				quality improvement initiatives in centres across India.
			    </div>
			</div>
		    </div>
		    <div className="buttons is-centered are-medium">
			<Link href="/publications">
			    <a className="button">
				Publications
			    </a>
			</Link>
			<Link href="/projects">
			    <a className="button">Projects</a>
			</Link>
			<Link href="/data">
			    <a className="button">Data</a>
			</Link>
		    </div>
		</div>
	    </div>
	    <div className="hero-footer has-background-light">
		<div className="container has-text-centered my-5">
		    <p>Copyright &copy; 2021 TITCO | 
			Made with <Link href="https://nextjs.org/"><a>Next.js</a></Link>,&nbsp; 
    <Link href="https://bulma.io/"><a>Bulma</a></Link>, and&nbsp;
    <Link href="https://styled-components.com/"><a>Styled Components</a></Link>&nbsp;
    | This website is open source on <Link href="https://github.com/titco/titco.org/"><a>GitHub</a></Link>
    		    </p>
		</div>
	    </div>
	</section>
    </>
  )
}
