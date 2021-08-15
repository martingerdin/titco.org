import Link from "next/link";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { TagList } from "../components/TagList";
import { LinkButton } from "../components/LinkButton";
import { projectsPageProps } from "./projects";

export default function DataPage({ projectsData }: projectsPageProps) {
  const projectsWithData = projectsData
    .map((project) => {
      return matter(project.content).data;
    })
    .filter((project) => {
      return typeof project.dataset !== "undefined";
    })
    .sort((a, b) => b.start - a.start);
  console.log(projectsWithData);
  return (
    <Layout title="Data" subtitle="Our Open Datasets">
      <section className="section">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {projectsWithData.map((project, key) => {
            const { title, subtitle, start, end, dataset, sampleSize } =
              project;
            const tags = [
              { heading: "Start", value: start },
              { heading: "End", value: end },
            ];
            return (
              <div className="block mx-5 my-5" key={key}>
                <article
                  className="card"
                  style={{ maxWidth: "600px", minWidth: "300px" }}
                >
                  <div className="card-content">
                    <div className="content">
                      <TagList tags={tags} />
                    </div>
                    <h3 className="title is-4">{title}</h3>
                    <h4 className="subtitle is-6">{subtitle}</h4>
                    <p className="heading">Observations</p>
                    <p className="title">{sampleSize}</p>
                    <LinkButton href={dataset} text="Get Data" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

const projectDir = join(process.cwd(), "_projects");

export async function getStaticProps() {
  const projectFiles = fs.readdirSync(projectDir);
  const projectsData = projectFiles.map((file) => {
    return {
      file: file,
      content: fs.readFileSync(join(projectDir, file), "utf8"),
    };
  });
  return {
    props: { projectsData },
  };
}
