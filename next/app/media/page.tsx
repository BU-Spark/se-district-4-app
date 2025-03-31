"use client";

import { Header } from "../components/Header";
import { SocialMediaCard } from "../components/SocialMediaCard";

const mockPosts = Array(3).fill({
  author: "Author",
  date: "Oct 27, 2024",
  image: "/street.jpg", // Put image in public/
  description:
    "This is where the description of the event will go. When this card is tapped on the dashboard, it will expand and reveal information on the event.",
});

export default function MediaPage() {
  return (
    <div>
      <Header />
      <main className="px-6 md:px-20 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A2C56] mb-16 text-left w-full">
          SOCIAL MEDIA PLATFORMS
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {mockPosts.map((post, index) => (
            <SocialMediaCard key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}
