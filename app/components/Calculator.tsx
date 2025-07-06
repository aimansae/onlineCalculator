"use client";

import React, { useState } from "react";
import Button from "./Button";
import {
  firstRowValues,
  secondRowValues,
  thirdRowValues,
  forthRowValues,
  fifthRowValues,
} from "@/consts";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [activeOperator, setActiveOperator] = useState("");
  const [lastResult, setLastResult] = useState("");
  const [showLastExpression, setShowLastExpression] = useState(false);
  const [activeValue, setActiveValue] = useState("");

  const handleActiveValue = (value: string) => {
    const lastChar = input.slice(-1);
    const isOperator = ["+", "-", "x", "/", "."].includes(value);
    const isLastCharOperator = ["+", "-", "x", "/", "."].includes(lastChar);

    // Don't allow operator as first input
    if (!input && isOperator) return;

    // Disallow selecting a second operator if the expression already contains one
    const existingOperatorMatch = input.match(/[\+\-x\/]/g);
    if (
      isOperator &&
      existingOperatorMatch &&
      existingOperatorMatch.length >= 1 &&
      isLastCharOperator === false
    ) {
      return; // An operator exists and the last char is a number => block further operators
    }

    // Replace last operator with new one
    if (isOperator && isLastCharOperator) {
      setInput((prev) => prev.slice(0, -1) + value);
      setActiveValue(value);
      setActiveOperator(value);
      return;
    }

    // After result is shown and a number is clicked, reset input
    if (showResult && !isOperator) {
      setInput(value);
      setShowResult(false);
      setActiveValue(value);

      setActiveOperator("");
      return;
    }

    // Append
    setInput((prev) => prev + value);
    setActiveOperator(isOperator ? value : "");
    setActiveValue(value);
  };
  const handleAc = () => {
    setInput("");
    setLastResult("");
    setResult("");
    setShowResult(false);
    setActiveValue("");
  };
  const handlePercentage = () => {
    if (!input) return;

    // Case 1: Single number like "6"
    if (/^[0-9.]+$/.test(input)) {
      const percentageResult = parseFloat(input) / 100;
      if (!isNaN(percentageResult)) {
        setInput(percentageResult.toString());
        setResult(percentageResult.toString());
        setShowResult(true);
      }
      return;
    }

    // Case 2: Expression like "50+6"
    const match = input.match(/(.*?)([0-9.]+)$/);
    if (!match) return;

    const [, expressionBeforeNumber, lastNumberStr] = match;
    const number = parseFloat(lastNumberStr);
    if (isNaN(number)) return;

    const percentage = number / 100;
    const updatedInput = `${expressionBeforeNumber}${percentage}`;
    setInput(updatedInput);

    try {
      const evaluated = eval(updatedInput.replace(/x/g, "*"));
      setResult(evaluated.toString());
      setShowResult(true);
      setLastResult(`${updatedInput} = ${evaluated}`);
    } catch {
      setResult("0");
      setShowResult(true);
    }
  };
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };
  const handleCalculateTotal = () => {
    const hasValidOperator = /[0-9]+[\+\-x\/%][0-9]+/.test(input);
    if (!hasValidOperator) return;
    try {
      const evalResult = eval(input.replace(/x/g, "*"));
      const fullResult = `${input} = ${evalResult}`;
      setInput(evalResult.toString()); // 👈 Replace input with result
      setResult(evalResult.toString());
      setShowResult(true); // Display the result
      setLastResult(fullResult);
      setShowLastExpression(false);
      localStorage.setItem("lastCalculation", fullResult);
    } catch {
      setResult("0");
      setShowResult(true);
    }
  };
  console.log("result is", result);
  const handleShowLastCalculation = () => {
    const stored = localStorage.getItem("lastCalculation");

    if (stored) {
      const [expression, result] = stored.split(" = ");
      if (expression && result) {
        setInput(expression);
        setResult(result);
        setShowResult(false);
        setLastResult(stored);
        setShowLastExpression(true);
      } else {
        setInput("");
      }
    }
  };
  const handleFirstRowClick = (name: string, value: string | JSX.Element) => {
    const actions: Record<string, () => void> = {
      ac: handleAc,
      delete: handleDelete,
      percentage: handlePercentage,
      divide: () => {
        handleActiveValue("/");
      },
    };
    const action = actions[name];
    if (action) action();
  };
  // <div className="md:max-w-md h-full mx-auto md:mt-10 md:p-6 text-black bg-gray-100 shadow-md rounded-lg">

  return (
    <div className="md:max-w-96 md:mx-auto   md:h-full h-screen w-full flex gap-4 md:bg-gray-300 md:gap-2 flex-col text-black  md:items-center md:justify-center shadow-md rounded-lg p-4">
      <div className="w-fit mx-auto">
        <div className="flex justify-end  bg-white/80 text-black font-bold text-3xl  p-4 my-2 border border-gray-200   ">
          {showLastExpression ? (
            <div className="  text-gray-700 font-semibold ">{lastResult}</div>
          ) : showResult ? (
            <div className=" ">{result}</div>
          ) : (
            <div className=" ">{input || "0"}</div>
          )}
        </div>

        {/*First row*/}
        <div className="h-full grid grid-cols-4 items-center justify-center gap-2">
          {firstRowValues.map((item, index) => (
            <Button
              isOperator={item.isOperator}
              isActive={activeValue === item.value}
              key={index}
              onClick={() => handleFirstRowClick(item.name, item.value)}
            >
              {item.value}
            </Button>
          ))}
          {/*Second row*/}
          {secondRowValues.map((item, index) => (
            <Button
              key={index}
              value={item.value}
              onClick={() => handleActiveValue(item.value)}
              isActive={activeValue === item.value}
              isOperator={item.isOperator}
            ></Button>
          ))}
          {/*Third row*/}
          {thirdRowValues.map((item, index) => (
            <Button
              key={index}
              value={item.value}
              onClick={() => handleActiveValue(item.value)}
              isActive={activeValue === item.value}
              isOperator={item.isOperator}
            ></Button>
          ))}
          {/*Forth row*/}
          {forthRowValues.map((item, index) => (
            <Button
              key={index}
              value={item.value}
              onClick={() => handleActiveValue(item.value)}
              isActive={activeOperator === item.value}
              isOperator={item.isOperator}
            ></Button>
          ))}
          {/*Last row*/}
          {fifthRowValues.map((item, index) => (
            <Button
              isOperator={item.isOperator}
              key={index}
              value={item.value}
              onClick={() => {
                if (item.value === "Last") {
                  handleShowLastCalculation();
                } else if (item.value === "=") {
                  handleCalculateTotal();
                } else {
                  handleActiveValue(item.value);
                }
              }}
              isActive={activeOperator === item.value}
            >
              {item.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
