import Link from "next/link";
import capitalise from "../lib/capitalise";

interface breadcrumbProps {
  pathNames: string[];
  currentPageName?: string | null;
}

export function Breadcrumb({ pathNames, currentPageName = null }: breadcrumbProps) {
  return (
    <div className="section" style={{paddingBottom: "1.5rem"}}>
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
				<a>
				    {
				      index === pathNames.length - 1 && currentPageName !== null
				      ? currentPageName
				      : capitalise(pathName)
				    }
				</a>
			    </Link>
			</li>      
		      );
		    }
		  })
		  
		}

	    </ul>
	</nav>
    </div>
  )
}
