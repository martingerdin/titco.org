import Link from "next/link";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { ProjectSummary } from "../components/ProjectSummary";

export interface projectsPageProps {
  projectsData: ProjectData[];
}

interface ProjectData {
  file: string;
  content: Project;
}

export interface Project {
  title: string;
  subtitle: string;
  aim: string;
  status: string;
  start: string;
  end?: string;
  dataset?: string;
  centres?: Centre[];
  cities?: string;
  sampleSize?: string;
  links?: Link[];
}

export interface Centre {
  name: string;
  latitude: number;
  longitude: number;
}

export interface Link {
  name: string;
  href: string;
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
            .map((project: ProjectData) => {
              return {
                file: project.file,
                content: matter(project.content).data,
              };
            })
            .sort((a, b) => b.content.start - a.content.start)
            .map((project: ProjectData, key: number) => {
              const { aim } = project.content;
              const projectPage = project.file.replace(".md", "");
              return (
                <div className="block mx-5 my-5" key={key}>
                  <article
                    className="card"
                    style={{ maxWidth: "600px", minWidth: "300px" }}
                  >
                    <div className="card-content">
                      <ProjectSummary card {...project.content} />
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
