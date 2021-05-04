import styled from "styled-components";
import publications from "../components/publications.json";
import Publication from "../components/Publication";
import Layout from "../components/Layout";

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    
    @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    }
    
    @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    }
`;

export default function PublicationsPage() {
  const sortedPublications = [...publications]
    .sort((a, b) => {
      return b.YEAR - a.YEAR;
    });
  
  return (
    <Layout title="Publications" subtitle="Our published work 2012-2021">
	<section className="section">
	    <GridStyled>
		{sortedPublications
		  .map((publication, key) => {
		    const {AUTHOR, TITLE, VOLUME, NUMBER, URL, JOURNAL, YEAR, MONTH, PAGES} = publication;
		    return(
		      <div className="block" key={key}>
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
		})}
	    </GridStyled>
	</section>
    </Layout>
  );
}
