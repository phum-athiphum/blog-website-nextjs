import React from "react";
import Image from "next/image";
import HOME_ICON from "@icons/home.svg"
import BLOG_ICON from "@icons/blog.svg"

function DesktopSidebar() {
  return (
    <div className="w-[280px] bg-[#bbc2c0] p-8 flex flex-col gap-3 h-screen text-base">
      <div className="flex gap-2">
        <Image src={HOME_ICON} alt="Menu Icon" className="w-5 h-5" />
        <h4>Home</h4>
      </div>
      <div className="flex gap-2">
      <Image src={BLOG_ICON} alt="Menu Icon" className="w-5 h-5" />
        <h4>Blog</h4>
      </div>
    </div>
  );
}

export default DesktopSidebar;
