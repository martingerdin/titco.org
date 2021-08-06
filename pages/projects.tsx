import Link from "next/link";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { ProjectLevel } from "../components/ProjectLevel";
import { TagList } from "../components/TagList";

interface projectsPageProps {
  projectFiles: string[];
  projectsData: Project[];
}

interface Project {
  file: string;
  content: any;
}

export default function ProjectsPage({ projectsData }: projectsPageProps) {
  return (
    <Layout title="Projects" subtitle="Our Ongoing and Completed Projects">
      <section className="section">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {projectsData
            .map((project: Project) => {
              return {
                file: project.file,
                content: matter(project.content).data,
              };
            })
            .sort((a, b) => b.content.start - a.content.start)
            .map((project: Project, key: number) => {
              const {
                title,
                subtitle,
                aim,
                status,
                start,
                end,
                centres,
                cities,
                sampleSize,
                targetSampleSize,
              } = project.content;
              let sampleSizeKey;
              let sampleSizeValue;
              if (typeof targetSampleSize !== "undefined") {
                sampleSizeKey = "Target Sample Size";
                sampleSizeValue = targetSampleSize;
              } else if (typeof sampleSize !== "undefined") {
                sampleSizeKey = "Sample Size";
                sampleSizeValue = sampleSize;
              }
              const tags = [
                { heading: "Status", value: status },
                { heading: "Start", value: start },
              ];
              if (typeof end !== "undefined")
                tags.push({ heading: "End", value: end });
              const projectPage = project.file.replace(".md", "");
              return (
                <div className="block mx-4" key={key}>
                  <article
                    className="card"
                    style={{ maxWidth: "600px", minWidth: "300px" }}
                  >
                    <div className="card-content">
                      <div className="content">
                        {typeof tags !== "undefined" && <TagList tags={tags} />}
                      </div>
                      <p className="title is-4">{title}</p>
                      <p className="subtitle is-6">{subtitle}</p>
                      <hr />
                      <ProjectLevel
                        isSmall={true}
                        items={[
                          { Centres: Object.keys(centres).length },
                          { Cities: cities },
                          { [sampleSizeKey]: sampleSizeValue },
                        ]}
                      />
                      <hr />
                      <div className="content">
                        <p className="title is-5">Aim</p>
                        <p>{aim}</p>
                      </div>
                      <Link href={`/projects/${projectPage}`}>
                        <a className="button">Read More</a>
                      </Link>
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
