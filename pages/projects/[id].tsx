import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import { Map } from "../../components/Map";
import { ProjectLevel } from "../../components/ProjectLevel";
import { TagList } from "../../components/TagList";

export default function ProjectTemplate({ project }: any) {
  console.log(project);
  const { data, content } = matter(project);
  const {
    title,
    pageName,
    subtitle,
    aim,
    status,
    start,
    end,
    centres,
    cities,
    targetSampleSize,
    sampleSize,
  } = data;
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
  if (typeof end !== "undefined") tags.push({ heading: "End", value: end });
  return (
    <Layout currentPageName={pageName}>
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <TagList tags={tags} />
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </section>
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <ProjectLevel
            items={[
              { Centres: Object.keys(centres).length },
              { Cities: cities },
              { [sampleSizeKey]: sampleSizeValue },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <figure className="image is-16by9">
            <Map data={centres} />
          </figure>
        </div>
      </section>
      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <ReactMarkdown
            components={{
              h1({ children }) {
                return <h2 className="title is-4">{children}</h2>;
              },
              h2({ children }) {
                return <h3 className="title is-5">{children}</h3>;
              },
              p({ children }) {
                return <p className="block">{children}</p>;
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </section>
    </Layout>
  );
}

const projectDir = join(process.cwd(), "_projects");

export async function getStaticProps(context: any) {
  const { params } = context;
  const project = fs.readFileSync(join(projectDir, params.id + ".md"), "utf8");
  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(projectDir)
    .map((path) => path.replace(".md", ""))
    .map((path) => {
      return { params: { id: path } };
    });
  return {
    paths: paths,
    fallback: false,
  };
}
