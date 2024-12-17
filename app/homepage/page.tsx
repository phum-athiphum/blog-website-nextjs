import React from "react";
import PostCard from "../components/PostCard";
import Dropdown from "../components/Dropdown";
import DefaultButton from "../components/button/DefaultButton";

function page() {
  return (
    <div className="w-[798px]">
      <div className="flex justify-between mb-4">
      <input type="text" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base xl:w-[535px] h-10"/>
      <div className="flex gap-2">
          <Dropdown/>
          <DefaultButton text={"Create"}/>
      </div>
      </div>
      <div className="rounded-t-2xl overflow-y-scroll">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default page;
