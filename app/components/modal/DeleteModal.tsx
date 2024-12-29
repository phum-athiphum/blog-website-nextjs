"use client";
import React from "react";
import OutlineButton from "../button/OutlineButton";
import DefaultButton from "../button/DefaultButton";
import { useDeletePostModalStore } from "@/app/stores/deletePostModalStore";
import { deletePost } from "@/app/services/postService";
function DeleteModal() {
  const { isOpen, closeDeleteModal, postId } = useDeletePostModalStore();

  const handleDelete = async () => {
    try {
       await deletePost(postId);
      closeDeleteModal()
      window.location.reload()
    } catch (error) {
      console.error("Error during post creation:", error);
    }
  };
  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[12px] w-[343px] h-[280px] xl:w-[400px] xl:h-[248px] px-4 py-4 xl:py-[32px] xl:px-[24px] text-center flex flex-col gap-4">
        <div className="text-xl font-semibold">
          <h1>Please confirm if you wish to</h1>
          <h1>delete the post</h1>
        </div>
        <div className="text-sm text-[#5b5b5b] mb-4">
          <p>Are you sure you want to delete the post?</p>
          <p>Once deleted, it cannot be recovered.</p>
        </div>
        <div className="flex flex-col gap-4 xl:flex-row justify-center">
          <div onClick={closeDeleteModal}>
            <OutlineButton text={"Cancel"} color={"grey"} />
          </div>
          <div onClick={handleDelete}>
            <DefaultButton text={"Delete"} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
