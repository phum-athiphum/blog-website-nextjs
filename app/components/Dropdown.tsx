import React from "react";
import Image from "next/image";
import DROPDOWN_ICON from "@icons/dropdown.svg";
import GREEN_DROPDOWN_ICON from "@icons/green-dropdown.svg";


interface DropdownProps {
  isTransperent?: boolean;
  mobileWidth?: string;
  text: string
}

function Dropdown({
  isTransperent = false,
  mobileWidth = "w-full",
  text
}: DropdownProps) {
  const dropdownStyle = isTransperent
    ? "bg-transperent text-black font-semibold"
    : "bg-white text-lightgreen border border-lightgreen";
  return (
    <div>
      <button
        className={`flex justify-center ${dropdownStyle} font-semibold rounded-lg text-sm px-5 py-2.5 text-center items-center ${mobileWidth} h-[40px] xl:w-full`}
        type="button"
      >
        {text}
        <Image
          src={isTransperent ? DROPDOWN_ICON : GREEN_DROPDOWN_ICON}
          alt="dropdown_icon"
          className="w-[20px] h-[20px] my-auto"
        />
      </button>

      <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Dashboard</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 ">Settings</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Earnings</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100">Sign out</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
