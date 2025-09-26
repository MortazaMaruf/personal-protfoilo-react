import React from "react";

const Button = ({ text }) => {
  return (
   <div className="cursor-pointer px-10 flex justify-center rounded-2xl items-center py-3 bg-[#0080FF] w-fit shadow-[2px_2px_5px_3px_#0080FF]">
    <span className="font-semibold text-md capitalize">{text} </span>
    
   </div>
  );
};

export default Button;
