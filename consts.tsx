import { FiDelete } from "react-icons/fi";

export const firstRowValues = [
  { name: "ac", value: "AC" },
  { name: "delete", value: <FiDelete size={20} /> },
  { name: "percentage", value: "%" },
  { name: "divide", value: "/", isOperator: true },
];
export const secondRowValues = [
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "x", isOperator: true },
];
export const thirdRowValues = [
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "-", isOperator: true },
];
export const forthRowValues = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "+", isOperator: true },
];
export const fifthRowValues = [
  { value: "0" },
  { value: "." },
  { value: "Prev" },
  { value: "=", isOperator: true },
];
