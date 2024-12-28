import React from "react";
import PostCard from "../components/PostCard";
import SearchSection from "../components/homepage/SearchSection";
import PostModal from "../components/modal/PostModal";

function page() {
  return (
    <div className="w-[343px] md:w-[698px] xl:w-[798px] mx-auto py-8 xl:py-0">
      <SearchSection />
      <div className="rounded-t-2xl overflow-y-scroll">
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </div>
      <PostModal />
    </div>
  );
}

export default page;
