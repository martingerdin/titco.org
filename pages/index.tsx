import Link from "next/link";
import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiCheck, mdiGithub, mdiSlack, mdiBookOpen, mdiDatabase, mdiSend } from "@mdi/js";
import Logo from "../components/Logo";

interface dropdownLinkProps {
  href: string,
  icon: any,
  id: string,
  text: string
}

function DropdownLink({href, icon, id, text}: dropdownLinkProps) {
  const SpanStyled = styled.span`
      :hover {
      cursor: pointer;
      color: black;
      }
  `;
  
  return (
    <div className="dropdown is-hoverable">
	<div className="dropdown-trigger">
	    <Link href={href} passHref>
		<a>
		    <SpanStyled
		      className="icon is-large mx-2"
		      aria-haspopup="true"
		      aria-controls={id}
		    >
			<Icon path={icon} />
		    </SpanStyled>
		</a>
	    </Link>
	</div>
	<div className="dropdown-menu" id={id} role="menu">
	    <div className="dropdown-content">
		<div className="dropdown-item">
		    {text}
		</div>
	    </div>
	</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
	<section className="hero is-fullheight">
	    <div className="hero-header">
		<div className="container has-text-centered my-4">
		    <DropdownLink
		      href="mailto:info@titco.org"
		      icon={mdiSend}
		      id="email"
		      text="Send us an email"
		    />
		    <DropdownLink
		      href="https://github.com/titco"
		      icon={mdiGithub}
		      id="github"
		      text="Visit us on GitHub"
		    />
		    <DropdownLink
		      href="/"
		      icon={mdiSlack}
		      id="slack"
		      text="Join us on Slack"
		    />
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
			    <a className="button">Publications</a>
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
    <Link href="https://styled-components.com//"><a>Styled Components</a></Link>
		    </p>
		</div>
	    </div>
	</section>
    </>
  )
}
