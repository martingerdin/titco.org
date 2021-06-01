import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import { Map } from "../../components/Map";

interface projectLevelProps {
  levelItems: {[key: string]: string | number,}[]
}

function ProjectLevel ({ levelItems }:projectLevelProps) {
  return (
    <nav className="level">
	{
	  levelItems.map((item, key) => {
	    return (
	      <div className="level-item has-text-centered" key={key}>
		  <div>
		      <p className="heading">{Object.keys(item)}</p>
		      <p className="title">{Object.values(item)}</p>
		  </div>
	      </div>
	    );
	  })
	}
    </nav>
  );
}

export default function ProjectTemplate ({project}: any) {
  console.log(project);
  const { data, content } = matter(project);
  const { title, pageName, subtitle, aim, centres, cities, targetSampleSize } = data;
  return (
    <Layout
      title={title}
      subtitle={subtitle}
      currentPageName={pageName}>
	<ProjectLevel levelItems={
	[
	  {"Centres": centres},
	  {"Cities": cities},
	  {"Target Sample Size": targetSampleSize},
	]
	} />
	<Map />
	<p>This is project {cities}</p>
    </Layout>
  );
}

const projectDir = join(process.cwd(), "_projects");

export async function getStaticProps(context: any) {
  const { params } = context;
  const project = fs.readFileSync(join(projectDir, params.id + ".md"), "utf8");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  return {
    props: {project},
  }
}

export async function getStaticPaths() {
  const paths = fs.readdirSync(projectDir)
		  .map(path => path.replace(".md", ""))
		  .map(path => {
		    return (
		      {params: {id: path},}
		    )
		  });
  return {
    paths: paths,
    fallback: false,
  }
}
