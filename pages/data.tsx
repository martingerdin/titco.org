import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { LinkButton } from "../components/LinkButton";
import { Card } from "../components/Card";
import { projectsPageProps } from "./projects";

export default function DataPage({ projectsData }: projectsPageProps) {
  const projectsWithData = projectsData
    .map((project: any) => {
      return matter(project.content).data;
    })
    .filter((project: any) => {
      return typeof project.dataset !== "undefined";
    })
    .sort((a: any, b: any) => b.start - a.start);
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
          {projectsWithData.map((project: any, key: number) => {
            const { title, subtitle, start, end, dataset, sampleSize } =
              project;
            const tags = [
              { heading: "Start", value: start },
              { heading: "End", value: end },
            ];
            return (
              <div className="block mx-5 my-5" key={key}>
                <Card tags={tags} title={title} subtitle={subtitle}>
                  <p className="heading">Observations</p>
                  <p className="title">{sampleSize}</p>
                  <LinkButton href={dataset} text="Get Data" />
                </Card>
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
