import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  // console.log(context.req)
  console.log('contextreqSession')
  console.log(context.req.session)
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return {
    props: { user: context.req.session.user },
  };
}

const Portfolio = () => {
  const router = useRouter()
  async function login(router) {
    const res = await fetch("/api/auth/google");
    const data = await res.json();
    router.push(data.Location);
  }
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  )
}

export default Portfolio