import React from "react";
type ButtonProps = {
  onClick: () => void;
  value?: string;
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
  isOperator?: boolean;
};
const Button = ({
  onClick,
  value,
  className,
  isActive,
  children,
  isOperator,
}: ButtonProps) => {
  return (
    <button
      className={`border rounded-full p-4 text-center ${className}  
     ${
       isOperator
         ? isActive
           ? "bg-orange-400/80 text-white" // lighter orange for active
           : "bg-orange-500 hover:bg-orange-400/80 text-black"
         : ""
     }
    ${!isOperator && isActive ? "bg-orange-500 text-black" : ""}
    ${!isOperator && !isActive ? "bg-white hover:bg-gray-300  " : ""}
  `}
      onClick={onClick}
      value={value}
    >
      {children || value}
    </button>
  );
};

export default Button;
