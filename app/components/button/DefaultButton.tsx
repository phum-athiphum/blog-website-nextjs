import React from 'react';

interface DefaultButtonProps {
  text: string;
  color?: 'red' | 'green';
}

function DefaultButton({ text, color = "green" }: DefaultButtonProps) {
    const buttonBgColor = color === 'red' ? 'bg-[#f23536]' : 'bg-lightgreen';
  return (
    <button className={` text-white ${buttonBgColor} font-medium py-2 px-4 rounded-lg w-full h-full xl:w-[105px] xl:h-[40px]`}>
      {text}
    </button>
  );
}

export default DefaultButton;