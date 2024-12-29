"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DROPDOWN_ICON from "@icons/dropdown.svg";
import GREEN_DROPDOWN_ICON from "@icons/green-dropdown.svg";
import { Category } from "@/app/types";
import { getAllCategory } from "@/app/services/categoryService";
import CHECK_ICON from "@icons/check.svg";

interface DropdownProps {
  isTransperent?: boolean;
  text: string;
  mobileWidth?: string;
  width?: string;
  dropdownWidth?: string;
  dropdownMobileWidth?: string;
  onSelectCategory: (categoryId: number | null) => void;
  category?: Category | null;
}

function ModalDropdown({
  isTransperent = false,
  text,
  onSelectCategory,
  category = null,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(category);

  const dropdownStyle = isTransperent
    ? "bg-transperent text-black font-semibold"
    : "bg-white text-lightgreen border border-lightgreen";

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

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="relative">
      <button
        className={`flex justify-center ${dropdownStyle} font-semibold rounded-lg text-sm px-5 xl:px-2.5 py-2.5 text-center items-center w-full h-[40px] xl:w-[195px]`}
        type="button"
        onClick={toggleDropdown}
      >
        {selectedCategory ? selectedCategory.name : text}
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
            {categories.map((category) => (
              <li key={category.id} onClick={() => handleSelectCategory(category)}>
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

export default ModalDropdown;