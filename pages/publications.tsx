import { join } from "path";
import fs from "fs";
import { useState } from "react";
import Publication from "../components/Publication";
import Layout from "../components/Layout";

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
        {years.sort().map((year, key) => {
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
              } = publication;
              return (
                <div className="mx-4 block" key={key}>
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
    .map((entry: string) => {
      return (
        entry
          .split("\n")
          .map((line) => {
            return line
              .replace(/^article\{([\w]*)\,/, "key = $1,")
              .replace(/^\s*([a-z]*)\s=\s{?/, '"$1": "')
              .replace(/\}?\,?\s*$/, '",')
              .replace(/^"\,$/, "");
          })
          .join("\n")
          // Replace strange letters
          .replace(/{\\"a}/g, "&x00E4")
          .replace(/{\\aa}/g, "&x00E5")
          .replace(/{\\"o}/g, "&x00F6")
          .replace(/{\\"A}/g, "&x00C4")
          .replace(/{\\AA}/g, "&x00C5")
          .replace(/{\\"O}/g, "&x00C6")
          // Convert bibtex to something that can be parsed as json
          .replace(/\{/g, "")
          .replace(/\}/g, "")
      );
    })
    .filter((entry) => entry !== "")
    .map((entry) => {
      let jsonEntry = entry;
      const i = entry.lastIndexOf(",");
      if (i != -1) {
        jsonEntry = jsonEntry.substr(0, i);
      }
      const json = "{" + jsonEntry + "}";
      let jsonParsed;
      try {
        jsonParsed = JSON.parse(json);
      } catch (error) {
        jsonParsed = {
          message: "The publication could not be parsed",
          error: "",
        };
      }
      return jsonParsed;
    });
  return {
    props: { publications },
  };
}
