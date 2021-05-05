import styled from "styled-components";
import publications from "../components/publications.json";
import Publication from "../components/Publication";
import Layout from "../components/Layout";
import { useState } from "react";

const FlexStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function PublicationsPage() {
  const [currentYear, setCurrentYear] = useState("all");
  const sortedPublications = [...publications]
    .sort((a, b) => {
      return b.YEAR - a.YEAR;
    });
  const years = [...new Set(sortedPublications.map((publication) => publication.YEAR))];
  return (
    <Layout title="Publications" subtitle={`Our published work ${years[years.length - 1]}-${new Date().getUTCFullYear()}`}>
	<div className="buttons is-centered has-addons">
	    {years.sort().map((year, key) => {
	      return <button
		       key={key}
		       className={`button ${currentYear === year.toString() ? "is-selected is-primary" : ""}`}
		       onClick={() => setCurrentYear(year.toString()) }>{year}</button>
	    })}
	</div>
	<section className="section">
	    <FlexStyled>
	    {
	      sortedPublications
		.filter(publication => {
		  if (currentYear === "all") {
		    return true;
		  } else {
		    return publication.YEAR.toString() === currentYear;
		  }
		})
		.map((publication, key) => {
		  const {AUTHOR, TITLE, VOLUME, NUMBER, URL, JOURNAL, YEAR, MONTH, PAGES} = publication;
		  return (
		    <div className="mx-4 block" key={key}>
			<Publication
			  authors={AUTHOR.join(", ")}
			  title={TITLE}
			  url={URL}
			  journal={JOURNAL}
			  year={YEAR.toString()}
			  month={MONTH}
			  volume={VOLUME}
			  issue={NUMBER}
			  pages={PAGES}
			/>
		    </div>
		  );
		})
	    }
	    </FlexStyled>
	</section>
    </Layout>
  );
}
