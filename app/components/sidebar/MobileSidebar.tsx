"use client";
import React from "react";
import Image from "next/image";
import HOME_SIDEBAR_ICON from "@icons/home-sidebar.svg";
import BLOG_SIDEBAR_ICON from "@icons/blog-sidebar.svg";
import RIGHTARROW_ICON from "@icons/right-arrow.svg";
import { useMobileSidebarStore } from "@/app/stores/mobileSidebarStore";

function MobileSidebar() {
  const { isOpen, closeSidebar } = useMobileSidebarStore();
  if (!isOpen) return null;
  return (
    <div className="flex absolute inset-0 z-10 h-screen bg-black bg-opacity-50 xl:hidden">
      <div className="w-[25vw] "></div>
      <div className="w-[75vw] rounded-l-[12px] flex flex-col p-8 gap-3 bg-darkgreen text-[#bbc2c0]">
        <Image
          src={RIGHTARROW_ICON}
          alt="Right Arrow Icon"
          className="w-4 h-3 mb-8 cursor-pointer"
          onClick={closeSidebar}
        />
        <div className="flex gap-2">
          <Image src={HOME_SIDEBAR_ICON} alt="Menu Icon" className="w-5 h-5" />
          <h4>Home</h4>
        </div>
        <div className="flex gap-2">
          <Image src={BLOG_SIDEBAR_ICON} alt="Menu Icon" className="w-5 h-5" />
          <h4>Our Blog</h4>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
