"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DROPDOWN_ICON from "@icons/dropdown.svg";
import CHECK_ICON from "@icons/check.svg";
import { getAllCategory } from "@/app/services/categoryService";
import { Category } from "@/app/types";

interface DropdownProps {
  text: string;
  onSelectCategory: (categoryId: number | null) => void;
}

function Dropdown({ text, onSelectCategory }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownStyle = "bg-transperent text-black font-semibold";
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelectCategory = (category: Category | null) => {
    setSelectedCategory(category);
    onSelectCategory(category?.id ?? null);
    closeDropdown();
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategory();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className={`flex justify-center ${dropdownStyle} font-semibold rounded-lg text-sm xl:px-2.5 py-2.5 text-center items-center w-full h-[40px] xl:w-[105px]`}
        type="button"
        onClick={toggleDropdown}
      >
        {selectedCategory ? selectedCategory.name : text}
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
            <li onClick={() => handleSelectCategory(null)}>
              <p className="block px-4 py-2 hover:bg-[#d8e9e4] font-semibold">
                No Select
              </p>
            </li>
            {categories.map((category) => (
              <li onClick={() => handleSelectCategory(category)}>
                <p
                  className={`flex justify-between px-4 py-2 hover:bg-[#d8e9e4]  ${
                    selectedCategory?.id === category.id ? "bg-[#d8e9e4]" : ""
                  }`}
                >
                  {category.name}
                  {selectedCategory?.id === category.id && (
                    <Image
                      src={CHECK_ICON}
                      alt="check_icon"
                      className="w-[20px] h-[20px] my-auto"
                    />
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
