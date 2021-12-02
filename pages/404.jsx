import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => {};
  }, [router]);
 
  return (
    <div className="not-found">
      <h1>Oops</h1>
      <h4>Page not found</h4>
      <p>Go back to <Link href="/"><a>Home page</a></Link></p>
    </div>
  );
}
 
export default NotFound;