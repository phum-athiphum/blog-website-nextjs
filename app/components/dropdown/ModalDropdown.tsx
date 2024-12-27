"use client";
import React, { useState } from "react";
import Image from "next/image";
import DROPDOWN_ICON from "@icons/dropdown.svg";
import GREEN_DROPDOWN_ICON from "@icons/green-dropdown.svg";

interface DropdownProps {
  isTransperent?: boolean;
  text: string;
  mobileWidth?: string;
  width?: string;
  dropdownWidth?: string;
  dropdownMobileWidth?: string;
}

function ModalDropdown({
  isTransperent = false,
  text,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownStyle = isTransperent
    ? "bg-transperent text-black font-semibold"
    : "bg-white text-lightgreen border border-lightgreen";
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className={`flex justify-center ${dropdownStyle} font-semibold rounded-lg text-sm px-5 xl:px-2.5 py-2.5 text-center items-center w-full h-[40px] xl:w-[195px]`}
        type="button"
        onClick={toggleDropdown}
      >
        {text}
        <Image
          src={isTransperent ? DROPDOWN_ICON : GREEN_DROPDOWN_ICON}
          alt="dropdown_icon"
          className="w-[20px] h-[20px] my-auto"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow mt-2 w-full xl:w-[195px]">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100">Dashboard</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100">Settings</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100">Earnings</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100">Sign out</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ModalDropdown;