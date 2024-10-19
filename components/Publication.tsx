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
  const [citationButtonText, setCitationButtonText] = useState("Copy Citation");
  if (typeof month !== "undefined") {
    var Month = capitalise(month);
  } else {
    var Month = "";
  }
  if (typeof issue === "undefined") {
    issue = "";
  }
  return (
    <Card title={title} subtitle={authors} spacedTitle={true}>
      <div className="pb-4">
        <i>
          {journal !== "" ? journal + ". " : ""}
          {year !== "" ? year + " " : ""}
          {Month !== "" ? Month + ";" : ""}
          {volume !== "" ? volume : ""}
          {issue !== "" ? "(" + issue + "):" : ""}
          {pages !== "" ? pages : ""}.
        </i>
      </div>
      <div className="buttons">
        <button
          className="button"
          onMouseOut={() => setCitationButtonText("Copy Citation")}
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
        </button>
        {typeof url !== "undefined" && (
          <LinkButton text="Fulltext" href={url} />
        )}
      </div>
    </Card>
  );
}
