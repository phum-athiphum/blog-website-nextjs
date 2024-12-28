import React from 'react';

interface DefaultButtonProps {
  text: string;
  color?: 'red' | 'green';
  width? : string
  mobileWidth?: string;
  mobileHeight?: string;
  textSize? : string
}

function DefaultButton({ text, color = "green", mobileWidth = "w-full", mobileHeight = "h-full", textSize = "14px", width = "105px" }: DefaultButtonProps) {
    const buttonBgColor = color === 'red' ? 'bg-[#f23536]' : 'bg-lightgreen';
  return (
    <button className={` text-white ${buttonBgColor} font-semibold py-2 px-4 rounded-lg  ${mobileWidth} ${mobileHeight} xl:w-[${width}] xl:h-[40px] text-[${textSize}]`}>
      {text}
    </button>
  );
}

export default DefaultButton;