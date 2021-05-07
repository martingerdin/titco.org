import Link from "next/link";
import styled from "styled-components";

const FooterStyled = styled.footer`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
`;

export default function Footer() {
  return (
    <FooterStyled className="footer">
	<div className="content has-text-centered">
	    <p>Copyright &copy; {new Date().getUTCFullYear()} TITCO | 
		Made with <Link href="https://nextjs.org/"><a>Next.js</a></Link>,&nbsp; 
    <Link href="https://bulma.io/"><a>Bulma</a></Link>, and&nbsp;
    <Link href="https://styled-components.com/"><a>Styled Components</a></Link>&nbsp;
    | This website is open source on <Link href="https://github.com/titco/titco.org/"><a>GitHub</a></Link>
    	    </p>
	</div>
    </FooterStyled>
  );
}
