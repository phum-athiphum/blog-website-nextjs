import React from "react";
import { notFound } from "next/navigation"; // Import notFound to handle missing data
import PostDetail from "../../components/PostDetail";
import CommentItem from "../../components/CommentItem";
import CommentModal from "../../components/modal/CommentModal";
import { Post } from "../../types";
import axios from "axios";

async function getPostData(id: string) : Promise<Post> {
  const res = await axios.get(`http://localhost:8000/posts/${id}`);
  return res.data.data
}

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const postData = await getPostData(id);
  return (
    <div
      className="w-[343px] md:w-[698px] xl:w-[800px] mx-auto py-8 xl:ml-[20%] xl:h-[90vh] xl:overflow-y-scroll"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <PostDetail post={postData} />
      {(postData.comments && postData.comments.length > 0) &&  (
        postData.comments.map((comment) => (
          <div className="mb-6" key={comment.id}>
            <CommentItem comment={comment} />
          </div>
        )))}
      <CommentModal />
    </div>
  );
}