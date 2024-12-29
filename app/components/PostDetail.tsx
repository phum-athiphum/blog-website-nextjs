"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import AVATAR_ONLINE from "@images/avatar-online.png";
import BACK_ICON from "@icons/back-page.svg";
import COMMENTS_ICON from "@icons/comments.svg";
import OutlineButton from "./button/OutlineButton";
import DefaultButton from "./button/DefaultButton";
import { useCreateCommentModalStore } from "../stores/createCommentModal";
import CommentModal from "./modal/CommentModal";
import { Post } from "../types";
import { timeAgo } from "../utils/date";
import { useRouter } from "next/navigation";

interface PostDetailProps {
  post: Post;
}

function PostDetail({post}: PostDetailProps) {
  const router = useRouter();
  const [isShowTextArea, setIsShowTextArea] = useState<boolean>(false);
  const { toggleCreateCommentModal } = useCreateCommentModalStore();
  

  const toggleTextArea = () => {
    setIsShowTextArea(!isShowTextArea);
  };
  

  return (
    <div className="flex flex-col">
              <CommentModal/>
      <Image
        src={BACK_ICON}
        alt="Back Icon"
        className="w-[42px] h-[42px] mb-10 cursor-pointer"
        onClick={() => router.back()}
      />
      <div className="flex gap-2.5 mb-2">
        <Image src={AVATAR_ONLINE} alt="Avatar" className="w-[48px] h-[48px]" />
        <h4 className="text-softGrey text-sm my-auto">{post.user.username}</h4>
        <h4 className="text-softGrey text-sm my-auto">{timeAgo(post.created_date)}</h4>
      </div>
      <mark className="text-mediumGrey text-xs py-1.5 px-2.5  w-fit bg-[#f3f3f3] rounded-xl my-1">
        {post.category.name}
      </mark>
      <div className="text-darkBlue flex flex-col gap-1 mb-7">
        <h1 className="text-[28px] font-semibold">
          {post.title}
        </h1>
        <p className="text-xs">
          {post.description}
        </p>
      </div>
      <div className="flex gap-2  mb-8">
        <Image src={COMMENTS_ICON} alt="Comments Icon" className="w-4 h-4" />
        <p className="text-softGrey text-xs">{post.comments.length} Comments</p>
      </div>

      <div className="block xl:hidden w-[132px] mb-6" onClick={toggleCreateCommentModal}>
        <OutlineButton text={"Add Comments"} textSize={"12px"} />
      </div>

      {isShowTextArea ? (
        <>
          <textarea
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 h-[100px] outline-none mb-6"
            placeholder="What on your mind ..."
          ></textarea>
          <div className="flex flex-col xl:flex-row justify-end gap-4 my-2 xl:my-2.5">
            <div onClick={toggleTextArea}>
              <OutlineButton text={"Cancel"} />
            </div>
            <DefaultButton text={"Post"} />
          </div>
        </>
      ) : (
        <div className="mb-6 hidden xl:block" onClick={toggleTextArea}>
          <OutlineButton
            text={"Add Comments"}
            width={"132px"}
            textSize={"12px"}
          />
        </div>
      )}
    </div>
  );
}

export default PostDetail;
