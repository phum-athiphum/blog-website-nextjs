import React from "react";
import Image from "next/image";
import LOGO from "@images/logo.png"
import CommentItem from "../components/CommentItem";
import SigninForm from "../components/SigninForm";
function SignInPage() {
  return (
    <div>
          <div className="flex flex-col xl:flex-row h-screen w-screen bg-darkgreen">
      <div className="w-full xl:w-3/5 order-2 xl:order-1 p-4 h-3/5 xl:h-full flex justify-center items-center">
        <SigninForm />
      </div>
      <div className="w-full xl:w-2/5 order-1 xl:order-2 bg-mediumgreen p-4 h-2/5 xl:h-full flex flex-col gap-4 items-center justify-center rounded-b-[36px] xl:rounded-l-[36px]">
        <Image
          src={LOGO}
          alt="Logo"
          className="w-[171px] h-[131px] xl:w-[299px] xl:h-[230px]"
        />
        <h1 className="text-[22px] xl:text-[28px] text-white font-sans italic">a Board</h1>
      </div>
    </div>
    </div>

  );
}

export default SignInPage;
