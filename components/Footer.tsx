import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
	<div className="content has-text-centered">
	    <p>Copyright &copy; {new Date().getUTCFullYear()} TITCO | 
		Made with <Link href="https://nextjs.org/"><a>Next.js</a></Link> and <Link href="https://bulma.io/"><a>Bulma</a></Link> | Open source on <Link href="https://github.com/titco/titco.org/"><a>GitHub</a></Link>
    	    </p>
	</div>
    </footer>
  );
}
