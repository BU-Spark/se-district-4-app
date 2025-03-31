import Image from "next/image";

interface Props {
  author: string;
  date: string;
  image: string;
  description: string;
}

export function SocialMediaCard({ author, date, image, description }: Props) {
  return (
    <div className="bg-white shadow rounded-xl w-full max-w-xs p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-3">
          <Image src="/author-icon.svg" alt="Author" width={48} height={48} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold lora">{author}</span>
            <span className="text-sm font-light lora-light">{date}</span>
          </div>
        </div>
        <Image src="/tiktok-icon.svg" alt="TikTok" width={36} height={36} />
      </div>
      <div className="overflow-hidden rounded-lg mb-3">
        <Image
          src={image}
          alt="Post Image"
          width={300}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
      <p className="text-sm text-gray-800 leading-snug lora-light">{description}</p>
    </div>
  );
}
