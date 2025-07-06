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
  const numericActiveClass =
    !isOperator && isActive ? "bg-gray-500 text-white" : "";

  const numericDefaultClass =
    !isOperator && !isActive ? "bg-white hover:bg-gray-400 text-black" : "";

  const operatorClass = isOperator
    ? isActive
      ? "bg-red-400 text-white"
      : "bg-orange-500 hover:bg-orange-400 font-bold text-black"
    : "";
  return (
    <button
      className={`flex items-center justify-center w-16 h-16 rounded-full text-xl    ${className}
        ${operatorClass}
        ${numericActiveClass}
        ${numericDefaultClass}`}
      onClick={onClick}
      value={value}
    >
      {children || value}
    </button>
  );
};

export default Button;
