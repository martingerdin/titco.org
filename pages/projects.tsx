import Link from "next/link";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";
import { ProjectSummary } from "../components/ProjectSummary";
import { LinkButton } from "../components/LinkButton";
import { Card } from "../components/Card";

export interface projectsPageProps {
  projectsData: ProjectData[] | any;
}

interface ProjectData {
  file: string;
  content: Project;
}

export interface Project {
  title?: string;
  subtitle?: string;
  aim?: string;
  status?: string;
  start?: string;
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
            .map((project: any) => {
              return {
                file: project.file,
                content: matter(project.content).data,
              };
            })
            .sort((a: any, b: any) => b.content.start - a.content.start)
            .map((project: any, key: number) => {
              const { title, subtitle, aim, dataset } = project.content;
              const projectPage = project.file.replace(".md", "");
              return (
                <div className="block mx-5 my-5" key={key}>
		    <Card>
                    <ProjectSummary card {...project.content}>
                      <div className="content">
                        <p className="title is-5">Aim</p>
                        <p>{aim}</p>
                      </div>
                      <div className="buttons">
                        <Link href={`/projects/${projectPage}`}>
                          <a className="button">Read More</a>
                        </Link>
                        {typeof dataset !== "undefined" && (
                          <LinkButton href={dataset} text="Get Data" />
                        )}
                      </div>
                    </ProjectSummary>
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
