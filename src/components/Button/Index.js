import React from "react";

const Button = ({ children, onClick, className = "", ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[12px] bg-[#F59D1F] text-white font-bold hover:bg-[#5c4523] transition duration-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
