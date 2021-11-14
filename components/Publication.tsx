import { useState } from "react";
import copy from "copy-to-clipboard";
import capitalise from "../lib/capitalise";
import { LinkButton } from "./LinkButton";
import { Card } from "./Card";

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

export default function Publication({
  authors,
  title,
  url,
  journal,
  year,
  month,
  volume,
  issue,
  pages,
}: publicationProps) {
  const [citationButtonText, setCitationButtonText] = useState("Citation");
  if (typeof month !== "undefined") {
    var Month = capitalise(month);
  } else {
    var Month = "";
  }
  if (typeof issue === "undefined") {
    issue = "";
  }
  const tags = [
    { heading: "Journal", value: journal },
    { heading: "Year", value: year },
  ];
  return (
    <Card tags={tags} title={title} subtitle={authors}>
      <div className="buttons">
        <button
          className="button dropdown is-hoverable dropdown-trigger"
          onMouseOver={() => setCitationButtonText("Copy Citation")}
          onMouseOut={() => setCitationButtonText("Citation")}
          onClick={() => {
            const copyWorked = copy(
              authors +
                ". " +
                title +
                ". " +
                journal +
                ". " +
                year +
                "  " +
                Month +
                ";" +
                volume +
                "(" +
                issue +
                ")" +
                ":" +
                pages +
                "."
            );
            if (copyWorked) {
              setCitationButtonText("Citation Copied!");
            }
          }}
        >
          {citationButtonText}
          <div
            className="dropdown-menu"
            id="dropdown"
            role="menu"
            style={{ width: "300px", whiteSpace: "normal" }}
          >
            <div className="dropdown-content">
              <div className="dropdown-item">
                <p className="content">
                  {authors !== "" ? authors + ". " : ""}
                  {title !== "" ? <b>{title}. </b> : ""}
                  <i>
                    {journal !== "" ? journal + ". " : ""}
                    {year !== "" ? year + " " : ""}
                    {Month !== "" ? Month + ";" : ""}
                    {volume !== "" ? volume : ""}
                    {issue !== "" ? "(" + issue + "):" : ""}
                    {pages !== "" ? pages : ""}.
                  </i>
                </p>
              </div>
            </div>
          </div>
        </button>
        {typeof url !== "undefined" && (
          <LinkButton text="Fulltext" href={url} />
        )}
      </div>
    </Card>
  );
}
