import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter()
  async function login(router) {
    const res = await fetch("/api/auth/google");
    const data = await res.json();
    router.push(data.Location);
  }
  return (
    <div>
      <h1>You're unauthorized</h1>
      <button onClick={() => login(router)}>Please login via Google</button>
    </div>
  )
}

export default Error