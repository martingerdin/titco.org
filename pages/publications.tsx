import styled from "styled-components";
import publications from "../components/publications.json";
import Publication from "../components/Publication";
import Layout from "../components/Layout";

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
`;

export default function PublicationsPage() {
  const sortedPublications = [...publications]
    .sort((a, b) => {
      return b.YEAR - a.YEAR;
    });
  
  return (
    <Layout title="Publications">
	<section className="section">
	    <GridStyled>
		{sortedPublications
		  .map((publication) => {
		    const {AUTHOR, TITLE, VOLUME, NUMBER, URL, JOURNAL, YEAR, MONTH, PAGES} = publication;
		    return(
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
		    );
		})}
	    </GridStyled>
	</section>
    </Layout>
  );
}
