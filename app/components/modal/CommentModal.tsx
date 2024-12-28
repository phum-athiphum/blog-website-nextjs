"use client";
import React from "react";
import Image from "next/image";
import DefaultButton from "../button/DefaultButton";
import CLOSE_ICON from "@icons/close.svg";
import OutlineButton from "../button/OutlineButton";
import { useCreateCommentModalStore } from "@/app/stores/createCommentModal";

function CommentModal() {
  const { isOpen, closeCreateCommentModal } = useCreateCommentModalStore();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[15px] w-[343px] h-[346px] h- px-4 py-4">
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
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 h-[120px] outline-none"
          placeholder="What on your mind ..."
        ></textarea>
        <div className="flex flex-col gap-4 mt-8 mb-4">
          <div>
            <OutlineButton text={"Cancel"} />
          </div>
          <DefaultButton text={"Post"} />
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
