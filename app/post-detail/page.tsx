import React from "react";
import PostDetail from "../components/PostDetail";
import CommentItem from "../components/CommentItem";
import CommentModal from "../components/modal/CommentModal";

function page() {
  return (
    <div
      className="w-[343px] md:w-[698px] xl:w-[800px] mx-auto py-8 xl:ml-[20%] xl:h-[90vh] xl:overflow-y-scroll"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <PostDetail />
      <div className="mb-6">
        <CommentItem />
      </div>
      <div className="mb-6">
        <CommentItem />
      </div>
      <div className="mb-6">
        <CommentItem />
      </div>
      <div className="mb-6">
        <CommentItem />
      </div>
      <div>
        <CommentItem />
      </div>
    </div>
  );
}

export default page;
