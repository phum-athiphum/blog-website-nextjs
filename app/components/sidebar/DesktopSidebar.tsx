"use client";
import React from "react";
import Image from "next/image";
import HOME_ICON from "@icons/home.svg";
import HOME_ICON_BOLD from "@icons/home-bold.svg";
import BLOG_ICON from "@icons/blog.svg";
import BLOG_ICON_BOLD from "@icons/blog-bold.svg";
import { useRouter, usePathname } from "next/navigation";

function DesktopSidebar() {
  const router = useRouter();
  const currentPath = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="hidden w-[280px] bg-[#bbc2c0] p-8 xl:flex flex-col gap-3 h-screen text-base">
      <div className="pt-[60px]">
        <div
          className={`flex gap-2 h-10 cursor-pointer ${
            currentPath === "/homepage" ? "font-bold" : ""
          }`}
          onClick={() => handleNavigation("/homepage")}
        >
          <Image
            src={currentPath === "/homepage" ? HOME_ICON_BOLD : HOME_ICON}
            alt="Menu Icon"
          />
          <h4 className="mt-2.5">Home</h4>
        </div>
        <div
          className={`flex gap-2 h-10 cursor-pointer ${
            currentPath === "/blog" ? "font-bold" : ""
          }`}
          onClick={() => handleNavigation("/blog")}
        >
          <Image
            src={currentPath === "/blog" ? BLOG_ICON_BOLD : BLOG_ICON}
            alt="Menu Icon"
          />
          <h4 className="mt-2.5">Blog</h4>
        </div>
      </div>
    </div>
  );
}

export default DesktopSidebar;
