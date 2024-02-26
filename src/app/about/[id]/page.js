export default function DynamicRoute({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        This is a dynamic route, the passed dynamic parameter provided in the
        url is: <span className="text-red-500">{params.id}</span>
        {/* it's params.id because the name of the folder is [id] , i.e. params.folderName */}
      </h1>
    </main>
  );
}
