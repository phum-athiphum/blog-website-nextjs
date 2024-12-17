import React from "react";
import DefaultButton from "./button/DefaultButton";
import Image from "next/image";
import MENU_ICON from "@icons/menu.svg";
function HeaderBar() {
  return (
    <div className="w-full h-[72px] xl:h-[60px] px-2 xl:px-8 bg-darkgreen flex justify-between">
      <div className="flex justify-between w-full my-auto">
        <h1 className="text-xl text-white font-sans italic mt-1">a Board</h1>
        <div className="hidden xl:block">
          <DefaultButton text={"Sign In"} />
        </div>
        <div className="my-auto block xl:hidden">
          <Image
            src={MENU_ICON}
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
