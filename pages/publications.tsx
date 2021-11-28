import { join } from "path";
import fs from "fs";
import { useState } from "react";
import Publication from "../components/Publication";
import { Card } from "../components/Card";
import Layout from "../components/Layout";
import { parseBibTex } from "../lib/parseBibTex";

interface ErrorCardInterface {
  message: string;
  string: string;
}

function ErrorCard({ message, string }: ErrorCardInterface) {
  const [moreClicked, setMoreClicked] = useState(false);
  return (
    <Card title="Oops! This publication can not be displayed">
      <a onClick={() => setMoreClicked(!moreClicked)}>More info</a>
      {moreClicked && (
        <>
          <p>{message}</p>
          <p>{string}</p>
        </>
      )}
    </Card>
  );
}

interface publicationInterface {
  key: string;
  doi: string;
  url: string;
  year: string;
  month: string;
  publisher: string;
  volume: string;
  number: string;
  pages: string;
  author: string;
  title: string;
  journal: string;
  message: string;
  error: boolean;
  string: string;
}

interface publicationsInterface {
  publications: publicationInterface[];
}

export default function PublicationsPage({
  publications,
}: publicationsInterface) {
  const sortedPublications = publications.sort((a: any, b: any) => {
    return b.year - a.year;
  });
  const years = [
    ...new Set(sortedPublications.map((publication) => publication.year)),
  ];
  const [selectedYears, setSelectedYears] = useState(years);
  // Make sure that all publications are shown if the user deselects all years
  if (selectedYears.length === 0) {
    setSelectedYears(years);
  }
  const selectedPublications = sortedPublications.filter((publication) =>
    selectedYears.includes(publication.year)
  );
  return (
    <Layout
      title="Publications"
      subtitle={`Our published work ${
        years[years.length - 1]
      }-${new Date().getUTCFullYear()}`}
    >
      <div className="buttons is-centered has-addons">
        <button
          className={`button ${
            years.every((year) => selectedYears.includes(year))
              ? "is-selected is-primary"
              : ""
          }`}
          onClick={() => {
            setSelectedYears(years);
          }}
        >
          All years
        </button>
        {years.map((year, key) => {
          return (
            <button
              key={key}
              className={`button is-outlined ${
                selectedYears.includes(year) ? "is-selected is-primary" : ""
              }`}
              onClick={() => {
                if (years.every((year) => selectedYears.includes(year))) {
                  setSelectedYears([year]);
                } else if (!selectedYears.includes(year)) {
                  setSelectedYears([...selectedYears, year]);
                } else if (selectedYears.includes(year)) {
                  setSelectedYears(
                    selectedYears.filter(
                      (selectedYear) => selectedYear !== year
                    )
                  );
                }
              }}
            >
              {year}
            </button>
          );
        })}
      </div>
      <div className="content has-text-centered">
        <p className="subtitle">
          Showing {selectedPublications.length} of {publications.length}{" "}
          publications.
        </p>
      </div>
      <section className="section">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {
            // Show only those publications published in years selected by the user
            selectedPublications.map((publication, key) => {
              const {
                author,
                title,
                volume,
                number,
                url,
                journal,
                year,
                month,
                pages,
                message,
                error,
                string,
              } = publication;
              return (
                <div className="mx-4 block" key={key}>
                  {error ? (
                    <ErrorCard message={message} string={string} />
                  ) : (
                    <Publication
                      authors={author.replace(/\sand\s/g, ", ")}
                      title={title}
                      url={url}
                      journal={journal}
                      year={year}
                      month={month}
                      volume={volume}
                      issue={number}
                      pages={pages}
                    />
                  )}
                </div>
              );
            })
          }
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const publicationsFile = fs.readFileSync(
    join(process.cwd(), "_publications/publications.bib"),
    "utf8"
  );
  const publications = publicationsFile
    .split("@")
    .filter((entry) => entry !== "")
    .map((entry) => parseBibTex(entry));
  return {
    props: { publications },
  };
}
