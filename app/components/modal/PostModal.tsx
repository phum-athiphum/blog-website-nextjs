"use client";
import React, { useEffect, useState } from "react";
import { useCreatePostModalStore } from "@/app/stores/createPostModalStore";
import Image from "next/image";
import CLOSE_ICON from "@icons/close.svg";
import OutlineButton from "../button/OutlineButton";
import DefaultButton from "../button/DefaultButton";
import Dropdown from "../dropdown/ModalDropdown";
import { createPosts } from "@/app/services/postService";
import { getUserId } from "@/app/utils/auth";
import { useDefaultErrortModalStore } from "@/app/stores/defaultErorModalStore";

function PostModal() {
  const { isOpen, closeCreatePostModal } = useCreatePostModalStore();
  const { setDescription, toggleErrorModal } = useDefaultErrortModalStore();
  const [userId, setUserId] = useState<number | null>(null);

  const [title, setTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const id = getUserId();
    if (id) {
      setUserId(id);
    }
  }, []);

  const handleSelectCategory = (categoryId: number | null) => {
    setCategoryId(categoryId);
  };

  const handleCloseModal = () => {
    setTitle("");
    setNewDescription("");
    setCategoryId(null);
    setError(null);
    closeCreatePostModal();
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    if (!categoryId) {
      setError("Please select a category.");
      return;
    }

    if (!newDescription.trim()) {
      setError("Description is required.");
      return;
    }

    const data = {
      userId: userId!,
      title,
      categoryId: categoryId!,
      description : newDescription,
    };

    try {
      const errorMessage = await createPosts(data);

      if (errorMessage) {
        closeCreatePostModal();
        setDescription(errorMessage)
        toggleErrorModal()
      } else {
        closeCreatePostModal();
        window.location.reload();
      }
    } catch (error) {
      console.error("Error during post creation:", error);
      setError("An error occurred while creating the post. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[15px] w-[343px] h-[580px] xl:w-[685px] xl:h-[510px] px-4 py-4 xl:p-[30px]">
        <div className="flex justify-between mb-6">
          <h1 className="text-[28px] font-semibold">Create Post</h1>
          <Image
            src={CLOSE_ICON}
            alt="Close Icon"
            className="w-3 h-3 xl:w-4 xl:h-4 cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        <div className="my-4 w-full">
          <Dropdown
            text={"Choose a community"}
            width={"195px"}
            onSelectCategory={handleSelectCategory}
          />
        </div>

        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full h-[44px] p-2 mb-5 outline-none"
        />
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 h-[234px] outline-none"
          placeholder="What on your mind ..."
        ></textarea>

        <div className="flex flex-col xl:flex-row justify-end gap-4 my-4 xl:my-2.5">
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div onClick={handleCloseModal}>
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

export default PostModal;


