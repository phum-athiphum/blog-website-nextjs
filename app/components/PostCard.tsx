"use client";
import React from "react";
import Image from "next/image";
import AVATAR from "@/app/public/images/profile-avatar.png";
import COMMENTS_ICON from "@/app/public/icons/comments.svg";
import EDIT_ICON from "@/app/public/icons/edit.svg";
import TRASH_ICON from "@/app/public/icons/trash.svg";
import { useCreatePostModalStore } from "../stores/createPostModalStore";
import { useDeletePostModalStore } from "../stores/deletePostModalStore";

interface PostCardProps {
  title: string;
  categoryId: string;
  description: string;
  commentCount: number;
  canEdit?: boolean;
}

function PostCard({ title, categoryId, description, commentCount, canEdit = false }: PostCardProps) {
  const { toggleCreatePostModal, setPostData } = useCreatePostModalStore();
  const { toggleDeleteModal } = useDeletePostModalStore();

  const handleEdit = () => {
    const postData = { title, categoryId, description };
    toggleCreatePostModal(true, postData);
  };

  return (
    <div className="flex flex-col bg-white p-5 mb-[2px] h-[200px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-2.5 mb-2">
          <Image src={AVATAR} alt="Avatar" className="w-[31px] h-[31px]" />
          <h4 className="text-softGrey text-sm my-auto">Wittawat</h4>
        </div>
        {canEdit && (
          <div className="flex gap-2.5 mb-2">
            <Image
              src={EDIT_ICON}
              alt="Edit Icon"
              className="w-4 h-4 cursor-pointer"
              onClick={handleEdit}
            />
            <Image
              src={TRASH_ICON}
              alt="Trash Icon"
              className="w-4 h-4 cursor-pointer"
              onClick={toggleDeleteModal}
            />
          </div>
        )}
      </div>

      <mark className="text-mediumGrey text-xs py-1.5 px-2.5  w-fit bg-[#f3f3f3] rounded-xl my-1">
        History
      </mark>
      <div className="text-darkBlue flex flex-col gap-1">
        <h1 className="text-base font-semibold">{title}</h1>
        <p className="line-clamp-2 text-xs">{description}</p>
      </div>
      <div className="flex gap-2 my-1">
        <Image src={COMMENTS_ICON} alt="Comments Icon" className="w-4 h-4" />
        <p className="text-softGrey text-xs">{commentCount} Comments</p>
      </div>
    </div>
  );
}

export default PostCard;