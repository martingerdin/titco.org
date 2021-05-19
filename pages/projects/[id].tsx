interface projectTemplateProps {
  query: any;
}

export default function ProjectTemplate ({query}: projectTemplateProps) {
  return (
    <p>This is project {query?.id}</p>
  );
} 


/*
ProjectTemplate.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  return id;
}
*/
