import React from "react";
interface OutlineButton {
  text: string;
  color?: 'grey' | 'green';
  width? : string
  textSize? : string
}

function OutlineButton({ text, color = "green", width = "105px", textSize = "14px" }: OutlineButton) {
    const buttonOutlineColor = color === 'grey' ? 'border-[#dadada] text-[#5b5b5b]' : 'border-lightgreen text-lightgreen';
  return (
    <button className={`bg-white  font-semibold py-2 px-4 rounded-lg w-full h-full xl:w-[${width}] xl:h-[40px] border ${buttonOutlineColor} text-[${textSize}]`}>
      {text}
    </button>
  );
}

export default OutlineButton;
