import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";
import Link from "next/link";
import capitalise from "../lib/capitalise";

interface publicationProps {
  authors: string;
  title: string;
  url: string;
  journal: string;
  year: string;
  month: string;
  volume: string;
  issue: string;
  pages: string;
}

export default function Publication({ authors, title, url, journal, year, month, volume, issue, pages }: publicationProps) {
  if (typeof month !== "undefined") { 
    var Month = capitalise(month);
  } else {
    var Month = "";
  }
  
  return (
    <>
	<div className="block">
	    <div className="card">
		<div className="card-content">
		    <p className="title is-4 is-spaced">{title}</p>
		    <p className="subtitle is-6">{authors}</p>
		    <p className="content"><i>{journal}. {year} {Month};{volume}({issue}):{pages}.</i></p>
		</div>
		
		{typeof url !== "undefined" &&
		 <footer className="card-footer">

		     <Link href={url} passHref>
			 <a className="card-footer-item">
			     <span>Fulltext</span>
			     <span className="icon is-small mx-2">
				 <Icon path={mdiOpenInNew} />
			     </span>
			 </a>
		     </Link>

		 </footer>
		}
	    </div>
        </div>
    </>
  )  
}
