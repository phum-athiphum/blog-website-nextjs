"use client";
import React, { useEffect, useState } from "react";
import SearchSection from "../components/homepage/SearchSection";
import UpdatePostModal from "../components/modal/UpdatePostModal";
import DeleteModal from "../components/modal/DeleteModal";
import PostCard from "../components/PostCard";
import { Post } from "../types";
import PostModal from "../components/modal/PostModal";
import { getUserFromToken, getUserId } from "../utils/auth";
import { useRouter } from "next/navigation";
import { getAllPosts } from "../services/postService";

async function fetchPosts(category: string, search: string): Promise<Post[]> {
  try {
    const id = getUserId()
    const posts = await getAllPosts(id?.toString(),category, search);
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
  const router = useRouter();

  const handleCategoryChange = (categoryId: number | null) => {
    setCategory(categoryId ? categoryId.toString() : "");
  };

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts(category, searchTerm);
      setPosts(fetchedPosts);
    };
    fetchData();
  }, [category, searchTerm]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedUsername = getUserFromToken(token);
      if (decodedUsername) {
        localStorage.setItem("name", decodedUsername.name);
        localStorage.setItem("userId", decodedUsername.userId);
      } else {
        localStorage.removeItem("accessToken");
        router.push("/sign-in");
        localStorage.removeItem("userId");
        localStorage.removeItem("name");
      }
    } else {
      localStorage.removeItem("accessToken");
      router.push("/sign-in");
      localStorage.removeItem("userId");
      localStorage.removeItem("name");
    }
  }, []);

  return (
    <div className="w-[343px] md:w-[698px] xl:w-[798px] mx-auto py-8 xl:pt-8">
      <SearchSection
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <div className="rounded-t-2xl overflow-y-scroll xl:h-[80vh]">
        {posts.map((post) => (
          <PostCard canEdit={true} key={post.id} post={post} />
        ))}
      </div>
      <UpdatePostModal />
      <PostModal />
      <DeleteModal />
    </div>
  );
};

export default Page;
