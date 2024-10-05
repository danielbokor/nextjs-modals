import Link from "next/link";

const photos = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Home() {
  return (
    <div
      className="grid grid-cols-3 items-center justify-center gap-4 p-4"
      style={{ gridTemplateColumns: "repeat(3, 200px)" }}
    >
      {photos.map((photo) => (
        <Link
          key={photo}
          href={`/photo/${photo}`}
          passHref
          className="flex h-52 max-w-xs items-center justify-center rounded-lg bg-gray-200 text-2xl font-medium text-black no-underline"
        >
          {photo}
        </Link>
      ))}
    </div>
  );
}
