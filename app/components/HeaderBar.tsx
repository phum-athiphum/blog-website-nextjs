"use client";
import React, { useEffect, useState } from "react";
import DefaultButton from "./button/DefaultButton";
import Image from "next/image";
import MENU_ICON from "@icons/menu.svg";
import { useMobileSidebarStore } from "../stores/mobileSidebarStore";
import AVATAR from "@/app/public/images/profile-avatar.png";
import { getUserFromToken } from "../utils/auth";
import { useRouter } from "next/navigation";

function HeaderBar() {
  const [name, setName] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedUsername = getUserFromToken(token);
      if (decodedUsername) {
        localStorage.setItem("name", decodedUsername.name);
        localStorage.setItem("userId", decodedUsername.userId);
        setName(decodedUsername.name);
      }
    }
  }, []);

  const { toggleSidebar } = useMobileSidebarStore();
  return (
    <div className="fixed w-full h-[72px] xl:h-[60px] px-2 xl:px-8 bg-darkgreen flex justify-between">
      <div className="flex justify-between w-full my-auto">
        <h1 className="text-xl text-white font-sans italic mt-1">a Board</h1>
        <div className="hidden xl:block">
          {name ? (
            <div className="flex gap-2">
              <p className="my-auto text-white mt-1">{name}</p>
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
