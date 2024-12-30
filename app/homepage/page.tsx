"use client";
import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import SearchSection from "../components/homepage/SearchSection";
import PostModal from "../components/modal/PostModal";
import { Post } from "../types";
import { getAllPosts } from "../services/postService";
import ErrorModal from "../components/modal/DefaultErrorModal";

async function fetchPosts(category: string, search: string): Promise<Post[]> {
  try {
    const posts = await getAllPosts("", category, search);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

const Page = ({ searchParams }: { searchParams: { category: string } }) => {
  const [category, setCategory] = useState<string>(searchParams.category || "");
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts(category, searchTerm);
      setPosts(fetchedPosts);
    };
    fetchData();
  }, [category, searchTerm]);

  const handleCategoryChange = (categoryId: number | null) => {
    setCategory(categoryId ? categoryId.toString() : "");
  };

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="w-[343px] md:w-[698px] xl:w-[798px] mx-auto py-8 xl:pt-8">
      <SearchSection
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange} // Pass the function to update search term
      />
      <div className="rounded-t-2xl overflow-y-scroll xl:h-[80vh]">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PostModal />
      <ErrorModal />
    </div>
  );
};

export default Page;
