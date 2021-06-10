import Link from "next/link";
import path from "path";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";

interface cardTagsProps {
  tags: tag[];
}

interface tag {
  heading: string | number;
  value: string | number;
}

function CardTags({ tags }: cardTagsProps) {
  return (
    <div className="field is-grouped is-grouped-multiline">
      {tags.map((tag: tag, key: number) => {
        const { heading, value } = tag;
        return (
          <div className="control" key={key}>
            <div className="tags has-addons">
              <span className="tag is-dark">{heading}</span>
              {value !== "" && <span className="tag is-info">{value}</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

interface projectsPageProps {
  projectFiles: string[];
  projectsData: string[];
}

export default function ProjectsPage({
  projectFiles,
  projectsData,
}: projectsPageProps) {
  return (
    <Layout title="Projects">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {projectsData.map((project: any, key: number) => {
          const projectMatter = matter(project);
          const { title, subtitle, tags } = projectMatter.data;
          const projectPage = projectFiles[key].replace(".md", "");
          return (
            <div className="block mx-4" key={key}>
              <article className="card" style={{ maxWidth: "400px" }}>
                <div className="card-content">
                  {typeof tags !== "undefined" && <CardTags tags={tags} />}
                  <p className="title is-4">{title}</p>
                  <p className="subtitle is-6">{subtitle}</p>
                  <Link href={`/projects/${projectPage}`}>
                    <a className="button">Read More</a>
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

const projectDir = join(process.cwd(), "_projects");

export async function getStaticProps() {
  const projectFiles = fs.readdirSync(projectDir);
  const projectsData = projectFiles.map((file) =>
    fs.readFileSync(join(projectDir, file), "utf8")
  );
  return {
    props: { projectFiles, projectsData },
  };
}
