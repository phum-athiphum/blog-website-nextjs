"use client";
import React from "react";
import Image from "next/image";
import HOME_SIDEBAR_ICON from "@icons/home-sidebar.svg";
import BLOG_SIDEBAR_ICON from "@icons/blog-sidebar.svg";
import RIGHTARROW_ICON from "@icons/right-arrow.svg";
import { useMobileSidebarStore } from "@/app/stores/mobileSidebarStore";
import { useRouter, usePathname } from "next/navigation";

function MobileSidebar() {
  const router = useRouter();
  const currentPath = usePathname();
  const { isOpen, closeSidebar } = useMobileSidebarStore();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  if (!isOpen) return null;
  return (
    <div className="flex fixed inset-0 z-10 h-full bg-black bg-opacity-50 xl:hidden">
      <div className="w-[25vw] "></div>
      <div className="w-[75vw] rounded-l-[12px] flex flex-col p-8 gap-3 bg-darkgreen text-[#bbc2c0]">
        <Image
          src={RIGHTARROW_ICON}
          alt="Right Arrow Icon"
          className="w-4 h-3 mb-8 cursor-pointer"
          onClick={closeSidebar}
        />
        <div
          className="flex gap-2"
          onClick={() => handleNavigation("/homepage")}
        >
          <Image
            src={
              HOME_SIDEBAR_ICON
            }
            alt="Menu Icon"
            className="w-5 h-5"
          />
          <h4 className={currentPath === "/homepage" ? "font-bold" : ""}>
            Home
          </h4>
        </div>
        <div className="flex gap-2" onClick={() => handleNavigation("/blog")}>
          <Image
            src={BLOG_SIDEBAR_ICON}
            alt="Menu Icon"
            className="w-5 h-5"
          />
          <h4 className={currentPath === "/blog" ? "font-bold" : ""}>
            Our Blog
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
