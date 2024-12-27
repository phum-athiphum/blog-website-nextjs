import React from "react";
import PostDetail from "../components/PostDetail";
import OutlineButton from "../components/button/OutlineButton";
import CommentItem from "../components/CommentItem";

function page() {
  return (
    <div className="w-[343px] md:w-[698px] xl:w-[800px] mx-auto xl:py-8 xl:ml-[20%] h-full overflow-y-scroll">
      <PostDetail />
        <div className="mb-6">
          <CommentItem />
        </div>
      </div>
  );
}

export default page;
