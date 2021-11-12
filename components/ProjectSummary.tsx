import { TagList } from "./TagList";
import { ProjectLevel } from "./ProjectLevel";
import { Project, Centre, Link } from "../pages/projects";
import { ReactNode } from "react";

interface ProjectSummaryInterface extends Project {
  children: ReactNode;
  card?: boolean;
}

interface CardInterface {
  condition: any;
  children: ReactNode;
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
  const tags = [
    { heading: "Status", value: status },
    { heading: "Start", value: start },
  ];
  if (typeof end !== "undefined") tags.push({ heading: "End", value: end });
  let dataTag = {
    heading: "Data",
    value: "Not yet available",
    color: "danger is-light",
  };
  if (typeof dataset !== "undefined") {
    dataTag.value = "Available";
    dataTag.color = "success is-light";
  }
  tags.push(dataTag);
  function CardHeader({ condition, children }: CardInterface) {
    return (
      <>
        {condition ? (
          <header className="card-header">{children}</header>
        ) : (
          { children }
        )}
      </>
    );
  }
  function CardContent({ condition, children }: CardInterface) {
    return (
      <>
        {condition ? (
          <div className="card-content">{children}</div>
        ) : (
          { children }
        )}
      </>
    );
  }
  return (
    <>
      <CardHeader condition={card}>
        <div className="card-header-title" style={{ fontWeight: "normal" }}>
          {typeof tags !== "undefined" && <TagList tags={tags} />}
        </div>
      </CardHeader>
      <CardContent condition={card}>
        <p className={`title ${card && "is-4"}`}>{title}</p>
        <p className={`subtitle ${card && "is-6"}`}>{subtitle}</p>
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
      </CardContent>
    </>
  );
}
