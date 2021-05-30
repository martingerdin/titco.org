import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

export default function ProjectTemplate ({project}: any) {
  console.log(project);
  return (
    <p>This is project </p>
  );
}

const projectDir = join(process.cwd(), "_projects");

export async function getStaticProps(context: any) {
  const { params } = context;
  const project = matter(fs.readFileSync(join(projectDir, params.id + ".md"), "utf8"));
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
