import React from "react";
import Image from "next/image";
import AVATAR from "@/app/public/images/profile-avatar.png";
import COMMENTS_ICON from "@/app/public/icons/comments.svg";

function PostCard() {
  return (
    <div className="flex flex-col bg-white p-5 mb-[1px] h-[200px]">
      <div className="flex gap-2.5 mb-2">
        <Image src={AVATAR} alt="Avatar" className="w-[31px] h-[31px]" />
        <h4 className="text-softGrey text-sm my-auto">Wittawat</h4>
      </div>
      <mark className="text-mediumGrey text-xs py-1.5 px-2.5  w-fit bg-[#f3f3f3] rounded-xl my-1">History</mark>
      <div className="text-darkBlue flex flex-col gap-1">
        <h1 className="text-base font-semibold">
          The Beginning of the End of the World
        </h1>
        <p className="line-clamp-2 text-xs">
          The afterlife sitcom The Good Place comes to its culmination, the show
          s two protagonists, Eleanor and Chidi, contemplate their future.
          Having lived thousands upon thousands of lifetimes together, and
          having experienced virtually everything this life has to offer, they
          are weary. It is time for it all to end. The show s solution to this
          perpetual happiness-cum-weariness is extinction. When you have had
          enough, when you are utterly sated by love and joy and pleasure, you
          can walk through a passage to nothingness. And Chidi has had enough
        </p>
      </div>
      <div className="flex gap-2 my-1">
        <Image src={COMMENTS_ICON} alt="Comments Icon" className="w-4 h-4" />
        <p className="text-softGrey text-xs">32 Comments</p>
      </div>
    </div>
  );
}

export default PostCard;
