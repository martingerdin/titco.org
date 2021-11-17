import { TagList } from "./TagList";
import { ProjectLevel } from "./ProjectLevel";
import { Project, Centre, Link } from "../pages/projects";
import { ReactNode } from "react";
import { getProjectTags } from "../lib/getProjectTags";

interface ProjectSummaryInterface extends Project {
  children: ReactNode;
  card?: boolean;
}

export function ProjectSummary({
  children,
  card = false,
  title,
  subtitle,
  aim,
  status,
  start,
  end,
  dataset,
  centres,
  cities,
  sampleSize,
  links,
}: ProjectSummaryInterface) {
  let sampleSizeKey = "Sample size";
  if (status === "Ongoing") sampleSizeKey = "Target sample size";
  const tags = getProjectTags({ status, start, end, dataset });
  return (
    <>
      {typeof tags !== "undefined" && <TagList tags={tags} />}
      <h2 className={`title ${card && "is-4"}`}>{title}</h2>
      <h3 className={`subtitle ${card && "is-6"}`}>{subtitle}</h3>
      <hr />
      <ProjectLevel
        isSmall={card}
        items={[
          { Centres: Object.keys(centres).length },
          { Cities: cities },
          { [sampleSizeKey]: sampleSize },
        ]}
      />
      <hr />
      {children}
    </>
  );
}
