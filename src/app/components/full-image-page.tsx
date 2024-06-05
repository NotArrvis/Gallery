import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="w-96 flex-shrink object-contain" />;
      </div>
      <div className="border-1 flex w-48 flex-shrink-0 flex-col">
        <div className="text-x1 font-bold">{image.name}</div>
      </div>
    </div>
  );
}
