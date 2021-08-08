import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiSend } from "@mdi/js";
import Layout from "../../components/Layout";
import { Map } from "../../components/Map";
import { ProjectSummary } from "../../components/ProjectSummary";

export default function ProjectTemplate({ project }: any) {
  const { data, content } = matter(project);
  const { pageName, centres, links } = data;

  return (
    <Layout currentPageName={pageName}>
      <div className="columns">
        {/*
                <div className="column is-2">
                <aside className="menu pl-5">
                <p className="menu-label">
                <Link
                href={{
                pathname: "/projects/[id]",
                query: { id: "taft" },
                }}
                >
                Map
                </Link>
                </p>
                <ul className="menu-list">
                <li>
                <a>Dashboard</a>
                </li>
                <li>
                <a>Customers</a>
                </li>
                </ul>
                </aside>
                </div> 
              */}
        <div className="column">
          <section className="section">
            <div
              className="container"
              style={{
                maxWidth: "1000px",
              }}
            >
              <ProjectSummary {...data} />
              <figure id="map" className="image is-3by1">
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
                    return <h3 className="title is-4">{children}</h3>;
                  },
                  h2({ children }) {
                    return <h4 className="title is-5">{children}</h4>;
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
          {typeof links !== "undefined" && (
            <section className="section">
              <div
                className="container"
                style={{
                  maxWidth: "1000px",
                }}
              >
                <h3 className="title is-4">More</h3>
                <div className="buttons">
                  {links.map(
                    (link: { name: string; href: string }, key: number) => {
                      return (
                        <Link href={link.href} passHref key={key}>
                          <a className="button is-link">
                            <span>{link.name}</span>
                            <span className="icon is-small pl-2">
                              <Icon path={mdiOpenInNew} />
                            </span>
                          </a>
                        </Link>
                      );
                    }
                  )}
                  <Link
                    href={`mailto:info@titco.org?subject="Regarding ${pageName}"`}
                    passHref
                  >
                    <a className="button is-info">
                      <span>Email Us About This Project</span>
                      <span className="icon is-small pl-2">
                        <Icon path={mdiSend} />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
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
