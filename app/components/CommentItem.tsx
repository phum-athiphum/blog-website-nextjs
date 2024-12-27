import React from 'react'
import Image from 'next/image'
import AVATAR from "@images/profile-avatar.png"
import GREY_AVATAR from "@images/default-avatar.png";
function CommentItem() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-2.5 mb-2">
        <Image src={GREY_AVATAR} alt="Avatar Grey" className="w-10 h-10" />
        <h4 className="text-softGrey text-sm my-auto">Wittawat</h4>
      </div>
        <p className="text-xs pl-[50px] pt-2">
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
  )
}

export default CommentItem