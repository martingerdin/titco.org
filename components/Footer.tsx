import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
	<div className="content has-text-centered">
	    <p>Copyright &copy; {new Date().getUTCFullYear()} TITCO | 
		Made with <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://bulma.io/">Bulma</Link> | Open source on <Link href="https://github.com/titco/titco.org/">GitHub</Link>
    	    </p>
	</div>
    </footer>
  );
}
