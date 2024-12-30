"use client";
import React from "react";
import DefaultButton from "../button/DefaultButton";
import { useDefaultErrortModalStore } from "@/app/stores/defaultErorModalStore";
function ErrorModal() {
  const { isOpen, closeErrorModal, description } = useDefaultErrortModalStore();

  if (!isOpen) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[12px] w-[343px] h-[160px] xl:w-[400px] px-4 py-4 xl:py-[32px] xl:px-[24px] text-center flex flex-col justify-between">
        <div className="text-xl font-semibold">
          <h1>Error</h1>
        </div>
        <div className="text-sm text-[#5b5b5b] mb-4">
          <p>{description}</p>
        </div>
        <div className="flex flex-col gap-4 justify-center my-2">
          <div onClick={closeErrorModal}>
            <DefaultButton text={"Accept"} color={"red"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorModal;
