import Link from "next/link";
import capitalise from "../lib/capitalise";

interface breadcrumbProps {
  pathNames: string[];
}

export function Breadcrumb({ pathNames }: breadcrumbProps) {
  return (
    <section className="section">
	<nav className="breadcrumb is-medium" aria-label="breadcrumbs">
	    <ul>
		<li><Link href="/"><a>Home</a></Link></li>
		{
		  pathNames.map((pathName, index) => {
		    if (pathName === "") {
		      return;
		    } else {
		      const link = `/${pathNames.slice(1, index + 1).join("/")}`
		      return (
			<li
			    key={index}
			    className={`${index === pathNames.length - 1 && "is-active"}`}
			>
			    <Link href={link}>
				<a>{capitalise(pathName)}</a>
			    </Link>
			</li>      
		      );
		    }
		  })
		  
		}

	    </ul>
	</nav>
    </section>
  )
}
