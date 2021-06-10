import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/Layout";

export default function ProjectsPage({ projects }: any) {
  return (
    <Layout title="Projects">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {projects.map((project: any, key: number) => {
          const projectMatter = matter(project);
          const { title, subtitle } = projectMatter.data;
          return (
            <div className="block mx-4" key={key}>
              <article className="card" style={{ maxWidth: "400px" }}>
                <div className="card-content">
                  <p className="title is-4">{title}</p>
                  <p className="subtitle is-6">{subtitle}</p>
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

export async function getStaticProps(context: any) {
  const { params } = context;
  const projects = fs
    .readdirSync(projectDir)
    .map((file) => fs.readFileSync(join(projectDir, file), "utf8"));
  return {
    props: { projects },
  };
}
