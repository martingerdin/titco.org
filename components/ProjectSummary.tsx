import { TagList } from "./TagList";
import { ProjectLevel } from "./ProjectLevel";
import { Project, Centre, Link } from "../pages/projects";

interface ProjectSummaryInterface extends Project {
  card?: boolean;
}

export function ProjectSummary({
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
  return (
    <>
      <div className="content">
        {typeof tags !== "undefined" && <TagList tags={tags} />}
      </div>
      <p className={`title ${card && "is-4"}`}>{title}</p>
      <p className={`subtitle ${card && "is-6"}`}>{subtitle}</p>
      {card && <hr />}

      <ProjectLevel
        isSmall={card}
        items={[
          { Centres: Object.keys(centres).length },
          { Cities: cities },
          { [sampleSizeKey]: sampleSize },
        ]}
      />

      {card && <hr />}
    </>
  );
}
