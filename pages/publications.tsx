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
  const sortedPublications = [...publications]
    .sort((a, b) => {
      return b.YEAR - a.YEAR;
    });
  const years = [...new Set(sortedPublications.map((publication) => publication.YEAR))];
  const [selectedYears, setSelectedYears] = useState(years);
  // Make sure that all publications are shown if the user deselects all years
  if (selectedYears.length === 0) {
    setSelectedYears(years);
  }
  const selectedPublications =  sortedPublications
    .filter(publication => selectedYears.includes(publication.YEAR))
  return (
    <Layout title="Publications" subtitle={`Our published work ${years[years.length - 1]}-${new Date().getUTCFullYear()}`}>
	<div className="buttons is-centered has-addons">
	    <button
	      className={
	      `button ${years.every(year => selectedYears.includes(year)) ? "is-selected is-primary" : ""}`
	      }
	      onClick={() => {
		setSelectedYears(years)
	      }}
	    >
		All years
	    </button>
	    {years.sort().map((year, key) => {
	      return <button
		       key={key}
		       className={`button is-outlined ${selectedYears.includes(year) ? "is-selected is-primary" : ""}`}
		       onClick={() => {
			 if (years.every(year => selectedYears.includes(year))) {
			   setSelectedYears([year]);
			 } else if (!selectedYears.includes(year)) {
			   setSelectedYears([...selectedYears, year]);
			 } else if (selectedYears.includes(year)) {
			   setSelectedYears(selectedYears.filter(selectedYear =>  selectedYear !== year));
			 } 
		       }
		       }
		     >
		  {year}
	      </button>
	    })}
	</div>
	<div className="content has-text-centered">
	    <p className="subtitle">Showing {selectedPublications.length} of {publications.length} publications.</p>
	</div>
	<section className="section">
	    <FlexStyled>
		{
		  // Show only those publications published in years selected by the user
		  selectedPublications
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
