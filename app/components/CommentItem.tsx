import React from 'react'
import Image from 'next/image'
import GREY_AVATAR from "@images/default-avatar.png";
import { Comment } from '../types';
import { timeAgo } from '../utils/date';
interface CommentProps {
  comment: Comment;
}
function CommentItem({comment} : CommentProps) {

  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-2.5 mb-2">
        <Image src={GREY_AVATAR} alt="Avatar Grey" className="w-10 h-10" />
        <h4 className="text-softGrey text-sm my-auto">{comment.user.username}</h4>
        <h4 className="text-softGrey text-sm my-auto">{timeAgo(comment.created_date)}</h4>
      </div>
        <p className="text-xs pl-[50px] pt-2">
          {comment.description}
        </p>
    </div>
  )
}

export default CommentItem