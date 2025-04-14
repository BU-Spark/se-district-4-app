"use client";

import { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { SocialMediaCard } from "../components/SocialMediaCard";

interface Post {
  ownerUsername: string;
  timestamp: string;
  imageUrl: string;
  description: string;
}

export default function MediaPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const isFetched = useRef(false); // caching to avoid repeated calls

  useEffect(() => {
    async function fetchInstagramPosts() {
      if (isFetched.current) return; // prevent duplicate fetch

      try {
        const response = await fetch(
          "https://api.apify.com/v2/datasets/jRJif5AlSdTXtwM05/items?token=apify_api_UNMtvkyhx6hQeGOZIPSrl9cagosWRK09fDd9"
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response error:", errorText);
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const formatted = data.slice(0, 20).map((item: any, idx: number) => {
          const rawTimestamp = item.timestamp;
          const readableDate = rawTimestamp
            ? new Date(rawTimestamp).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "Date not available";
        
          const imageUrl = `https://www.instagram.com/p/${item.shortCode}/media/?size=l`;
          const description = item.caption || "No description provided.";
        
        
          return {
            ownerUsername: "d4worrell",
            timestamp: readableDate,
            imageUrl,
            description,
          };
        });
        

        setPosts(formatted);
        isFetched.current = true;
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    }

    fetchInstagramPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="px-6 md:px-20 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A2C56] mb-16 text-left w-full">
          SOCIAL MEDIA
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {posts.map((post, index) => (
            <SocialMediaCard
              key={index}
              author={post.ownerUsername}
              date={post.timestamp}
              image={post.imageUrl}
              description={post.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
