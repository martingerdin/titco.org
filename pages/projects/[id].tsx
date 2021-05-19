import { useRouter } from "next/router";

export default function ProjectTemplate () {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  
  return (
    <p>This is project {id}</p>
  );
} 


/*
ProjectTemplate.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  return id;
}
*/
