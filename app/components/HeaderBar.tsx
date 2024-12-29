"use client";
import React, { useEffect, useState } from "react";
import DefaultButton from "./button/DefaultButton";
import Image from "next/image";
import MENU_ICON from "@icons/menu.svg";
import { useMobileSidebarStore } from "../stores/mobileSidebarStore";
import { getUsernameFromToken } from "../utils/auth";
import { usePathname, useRouter } from "next/navigation";
import AVATAR from "@/app/public/images/profile-avatar.png";

function HeaderBar() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const currentPath = usePathname();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedUsername = getUsernameFromToken(token);
      if (decodedUsername) {
        setUsername(decodedUsername);
      }
    } else  {
      if (currentPath === "/blog") {
        localStorage.removeItem("accessToken");
        router.push("/sign-in");
      }
    }
    
  }, []);

  const { toggleSidebar } = useMobileSidebarStore();
  return (
    <div className="fixed w-full h-[72px] xl:h-[60px] px-2 xl:px-8 bg-darkgreen flex justify-between">
      <div className="flex justify-between w-full my-auto">
        <h1 className="text-xl text-white font-sans italic mt-1">a Board</h1>
        <div className="hidden xl:block">
          {username ? (
            <div className="flex gap-2">
              <p className="my-auto text-white mt-1">{username}</p>
              <Image src={AVATAR} alt="Avatar" className="w-[31px] h-[31px]" />
            </div>
          ) : (
            <div onClick={() => router.push("/sign-in")}>
              <DefaultButton text={"Sign In"} />
            </div>
          )}
        </div>
        <div className="my-auto block xl:hidden">
          <Image
            src={MENU_ICON}
            alt="Menu Icon"
            className="w-6 h-6"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
