"use client";
import React from "react";
import Image from "next/image";
import AVATAR from "@/app/public/images/profile-avatar.png";
import COMMENTS_ICON from "@/app/public/icons/comments.svg";
import EDIT_ICON from "@/app/public/icons/edit.svg";
import TRASH_ICON from "@/app/public/icons/trash.svg";
import { useUpdatePostModalStore } from "../stores/updatePostModalStore";
import { useDeletePostModalStore } from "../stores/deletePostModalStore";
import { Post } from "../types";
import { useRouter } from "next/navigation";

interface PostCardProps {
  post: Post;
  canEdit?: boolean;
}

function PostCard({ post, canEdit = false }: PostCardProps) {
  const router = useRouter();
  const { toggleUpdatePostModal } = useUpdatePostModalStore();
  const { toggleDeleteModal, setPostId } = useDeletePostModalStore();

  const handleEdit = () => {
    toggleUpdatePostModal(true, post);
  };

  const handleDelete = () => {
    setPostId(post.id)
    toggleDeleteModal()
  };

  return (
    <div className="flex flex-col bg-white p-5 mb-[2px] h-[200px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-2.5 mb-2">
          <Image src={AVATAR} alt="Avatar" className="w-[40px] h-[40px]" />
          <h4 className="text-softGrey text-sm my-auto">{post.user.username}</h4>
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
              onClick={handleDelete}
            />
          </div>
        )}
      </div>

      <mark className="text-mediumGrey text-xs py-1.5 px-2.5  w-fit bg-[#f3f3f3] rounded-xl my-1">
        {post.category.name}
      </mark>
      <div className="text-darkBlue flex flex-col gap-1 cursor-pointer" onClick={()=>router.push(`/post-detail/${post.id}`)}>
        <h1 className="text-base font-semibold">{post.title}</h1>
        <p className="line-clamp-2 text-xs">{post.description}</p>
      </div>
      <div className="flex gap-2 my-1">
        <Image src={COMMENTS_ICON} alt="Comments Icon" className="w-4 h-4" />
        <p className="text-softGrey text-xs">{post.comments.length} Comments</p>
      </div>
    </div>
  );
}

export default PostCard;