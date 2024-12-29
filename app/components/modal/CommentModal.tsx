"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DefaultButton from "../button/DefaultButton";
import CLOSE_ICON from "@icons/close.svg";
import OutlineButton from "../button/OutlineButton";
import { useCreateCommentModalStore } from "@/app/stores/createCommentModal";
import { createComment } from "@/app/services/commentService";
import { getUserId } from "@/app/utils/auth";

interface CommentModalProps {
  postId: number;
}

function CommentModal({ postId }: CommentModalProps) {
  const { isOpen, closeCreateCommentModal } = useCreateCommentModalStore();
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    const id =  getUserId()
    if (id) {
      setUserId(id)
    }
  }, []);


  const handlePostComment = async () => {
    if (!comment.trim()) {
      setError("Comment cannot be empty.");
      return;
    }
    setError(null);

    try {
      await createComment({
        postId: postId,
        userId: userId!,
        description: comment,
      });
      setComment("");
      closeCreateCommentModal();
      window.location.reload()
    } catch (err) {
      setError("Failed to post comment. Please try again.");
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[15px] w-[343px] h-[346px] px-4 py-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-[20px] font-semibold">Add Comments</h1>
          <Image
            src={CLOSE_ICON}
            alt="Close Icon"
            className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer"
            onClick={closeCreateCommentModal}
          />
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 h-[120px] outline-none"
          placeholder="What on your mind ..."
        ></textarea>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex flex-col gap-4 mt-8 mb-4">
          <div onClick={closeCreateCommentModal}>
            <OutlineButton text={"Cancel"} />
          </div>
          <div onClick={handlePostComment}>
            <DefaultButton text={"Post"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
