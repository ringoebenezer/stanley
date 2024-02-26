export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        To try the dynamic route, just type something like {""}
        <a
          className="text-blue-400"
          href="http://localhost:3000/about/anythingrandom">
          http://localhost:3000/about/anythingrandom
        </a>{" "}
        in the url
      </h1>
    </main>
  );
}
