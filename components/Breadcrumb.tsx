import Link from "next/link";
import capitalise from "../lib/capitalise";

interface breadcrumbProps {
  pathNames: string[];
  currentPageName?: string | null;
}

export function Breadcrumb({ pathNames, currentPageName = null }: breadcrumbProps) {
  return (
    <div className="section"> 
	<nav className="breadcrumb is-medium" aria-label="breadcrumbs">
	    <ul>
		<li><Link href="/">Home</Link></li>
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
				{
				  index === pathNames.length - 1 && currentPageName !== null
				  ? currentPageName
				  : capitalise(pathName)
				}
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
