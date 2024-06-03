import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/0a54337e-8b7c-4fe7-9f60-f1f179ecd0e4-1s4gm.JPG",
  "https://utfs.io/f/131c3838-4a69-4cc4-a213-14ee9059c465-1s4gn.jpg",
  "https://utfs.io/f/d508571c-e3d2-4463-a4c7-2519d8b5b4ba-1j7vup.png",
  "https://utfs.io/f/001377d4-a546-4dc3-86c7-539c2903d875-22gr.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
