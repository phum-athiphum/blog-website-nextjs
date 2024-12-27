"use client";
import React, { useState } from "react";
import Image from "next/image";
import DROPDOWN_ICON from "@icons/dropdown.svg";

interface DropdownProps {
  text: string;
}

function Dropdown({ text }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownStyle = "bg-transperent text-black font-semibold";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className={`flex justify-center ${dropdownStyle} font-semibold rounded-lg text-sm xl:px-2.5 py-2.5 text-center items-center w-full h-[40px] xl:w-[105px]`}
        type="button"
        onClick={toggleDropdown}
      >
        {text}
        <Image
          src={DROPDOWN_ICON}
          alt="dropdown_icon"
          className="w-[20px] h-[20px] my-auto"
        />
      </button>

      {/* Full-screen overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={closeDropdown}
        />
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-[202px]">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <p className="block px-4 py-2 hover:bg-[#d8e9e4]">Dashboard</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-[#d8e9e4]">Settings</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-[#d8e9e4]">Earnings</p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-[#d8e9e4]">Sign out</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;