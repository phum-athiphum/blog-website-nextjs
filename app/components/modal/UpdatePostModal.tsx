"use client";
import React, { useEffect, useState } from "react";
import { useCreatePostModalStore } from "@/app/stores/createPostModalStore";
import Image from "next/image";
import CLOSE_ICON from "@icons/close.svg";
import OutlineButton from "../button/OutlineButton";
import DefaultButton from "../button/DefaultButton";
import Dropdown from "../dropdown/ModalDropdown";
import { createPosts, updatePost } from "@/app/services/postService";
import { getUserId } from "@/app/utils/auth";
import { useUpdatePostModalStore } from "@/app/stores/updatePostModalStore";

function UpdatePostModal() {
  const { isOpen, closeUpdatePostModal, postData } = useUpdatePostModalStore();
  const [userId, setUserId] = useState<number | null>(null);

  const [title, setTitle] = useState(postData?.title || "");
  const [description, setDescription] = useState(postData?.description || "");
  const [categoryId, setCategoryId] = useState<number | null>(null);

  useEffect(() => {
    if (postData) {
      setTitle(postData.title);
      setDescription(postData.description);
    }
  }, [postData]);

  useEffect(() => {
    const id = getUserId();
    if (id) {
      setUserId(id);
    }
  }, []);

  const handleSelectCategory = (categoryId: number | null) => {
    setCategoryId(categoryId);
  };

  const handleSubmit = async () => {
    const data = {
      title,
      categoryId: categoryId!,
      description,
    };

    try {
      await updatePost(postData!.id, data);
    } catch (error) {
      console.error("Error during post creation:", error);
    } finally {
      closeUpdatePostModal();
      window.location.reload();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[15px] w-[343px] h-[580px] xl:w-[685px] xl:h-[510px] px-4 py-4 xl:p-[30px]">
        <div className="flex justify-between mb-6">
          <h1 className="text-[28px] font-semibold">Update Post</h1>
          <Image
            src={CLOSE_ICON}
            alt="Close Icon"
            className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer"
            onClick={closeUpdatePostModal}
          />
        </div>
        <div className="my-4 w-full">
          <Dropdown
            text={"Choose a community"}
            width={"195px"}
            onSelectCategory={handleSelectCategory}
            category={postData?.category}
          />
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[44px] p-2 mb-5 outline-none"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 h-[234px] outline-none"
          placeholder="What on your mind ..."
        ></textarea>
        <div className="flex flex-col xl:flex-row justify-end gap-4 my-4 xl:my-2.5">
          <div onClick={closeUpdatePostModal}>
            <OutlineButton text={"Cancel"} />
          </div>
          <div onClick={handleSubmit}>
            <DefaultButton text={"Post"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePostModal;