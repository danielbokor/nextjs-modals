export default function Photo({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex h-52 w-60 items-center justify-center rounded-lg bg-gray-200 text-2xl font-medium text-black no-underline">
        {id}
      </div>
    </div>
  );
}
