"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import DefaultButton from "../button/DefaultButton";
import SEARCH_ICON from "@icons/search.svg";
import { useCreatePostModalStore } from "@/app/stores/createPostModalStore";
import { useDefaultErrortModalStore } from "@/app/stores/defaultErorModalStore";
interface SearchSectionProps {
  onCategoryChange: (categoryId: number | null) => void;
  onSearchChange: (searchTerm: string) => void;
}
function SearchSection({
  onCategoryChange,
  onSearchChange,
}: SearchSectionProps) {
  const [isActiveSearchMobile, setIsActiveSearchMobile] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const {toggleErrorModal, setDescription} = useDefaultErrortModalStore()

  const toggleActiveSearchMobile = () => {
    setIsActiveSearchMobile((prev) => !prev);
    setSearchValue("")
  }

  const { toggleCreatePostModal} = useCreatePostModalStore();

  const handleCreate = () => {
    console.log("29");
    const token = localStorage.getItem("accessToken")
    if (token) {
      toggleCreatePostModal();
    } else {
      setDescription("Please Login to create post, or token valid or expired")
      toggleErrorModal()
    }

  };

  const handleSelectCategory = (selectedCategoryId: number | null) => {
    onCategoryChange(selectedCategoryId);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };
  const inputClasses =
    "w-full p-4 pl-10 text-gray-900 border-2 border-gray-300 rounded-lg bg-transparent text-base h-10 focus:outline-none";
  const iconClasses =
    "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5";

  return (
    <div className="flex justify-between mb-4">
      {/* Mobile Search Icon */}
      {!isActiveSearchMobile && (
        <Image
          src={SEARCH_ICON}
          alt="search icon"
          className="block md:hidden w-[20px] h-[20px] my-auto"
          onClick={toggleActiveSearchMobile}
        />
      )}

      {/* Mobile Search Input */}
      {isActiveSearchMobile && (
        <div className="block md:block xl:hidden relative w-full md:w-[475px]">
          <input
            type="text"
            className={inputClasses}
            placeholder="Search"
            onChange={handleSearchChange}
          />
          <Image
            src={SEARCH_ICON}
            alt="search icon"
            className={iconClasses}
            onClick={toggleActiveSearchMobile}
          />
        </div>
      )}

      {/* Desktop Search Input */}
      <div className="hidden md:block xl:block relative w-full md:w-[475px] xl:w-[535px]">
        <input
          type="text"
          className={inputClasses}
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Image src={SEARCH_ICON} alt="search icon" className={iconClasses} />
      </div>

      {/* Dropdown and Button */}
      {!isActiveSearchMobile && (
        <div className="flex gap-2">
          <Dropdown
            text={"Community"}
            onSelectCategory={handleSelectCategory}
          />
          <div onClick={handleCreate}>
            <DefaultButton
              text="Create +"
              mobileHeight="40px"
              mobileWidth="105px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
