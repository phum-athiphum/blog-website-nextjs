import React from "react";
interface OutlineButton {
  text: string;
  color?: 'grey' | 'green';
}

function OutlineButton({ text, color = "green" }: OutlineButton) {
    const buttonOutlineColor = color === 'grey' ? 'border-[#dadada] text-[#5b5b5b]' : 'border-lightgreen text-lightgreen';
  return (
    <button className={`bg-white  font-medium py-2 px-4 rounded-lg w-full h-full xl:w-[105px] xl:h-[40px] border ${buttonOutlineColor}`}>
      {text}
    </button>
  );
}

export default OutlineButton;
