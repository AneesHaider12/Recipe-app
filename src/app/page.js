
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold ">
      <h1>
        welcome to recipe app
      </h1>
      <h1>
        <Link href="/recipe-list"> Go to Recipes Page</Link>
      </h1>
    </main>
  );
}
