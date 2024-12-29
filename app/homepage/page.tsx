// app/homepage/page.tsx
import React from "react";
import PostCard from "../components/PostCard";
import SearchSection from "../components/homepage/SearchSection";
import PostModal from "../components/modal/PostModal";
import axios from "axios";
import { Post } from "../types";

async function fetchPosts(category: string): Promise<Post[]> {
  try {
    const response = await axios.get(`http://localhost:8000/posts?category=${category}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const Page = async ({ searchParams }: { searchParams: { category: string } }) => {
  const category = searchParams.category || "";
  const posts = await fetchPosts(category);

  return (
    <div className="w-[343px] md:w-[698px] xl:w-[798px] mx-auto py-8 xl:pt-8">
      <SearchSection />
      <div className="rounded-t-2xl overflow-y-scroll xl:h-[80vh]">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PostModal />
    </div>
  );
};

export default Page;