import { useState } from "react";

export const useCalculator = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>(
    "Enter numbers and click operation"
  );
  const [isNegative, setIsNegative] = useState<boolean>(false);

  // display result func with red as neg styling
  const displayResult = (resultValue: number | string) => {
    setResult(String(resultValue));
    if (typeof resultValue === "number" && resultValue < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  };

  // check if inputs are empty
  const checkInputs = (): boolean => {
    if (num1 === "" || num2 === "") {
      setResult("Please enter both numbers");
      setIsNegative(false);
      return false;
    }
    return true;
  };

  // generic operation executor to reduce repetition from original js 
  const performOperation = (
    operation: (n1: number, n2: number) => number | string
  ) => {
    if (!checkInputs()) return;
    const n1 = Number(num1);
    const n2 = Number(num2);
    const result = operation(n1, n2);
    displayResult(result);
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("Enter numbers and click an operation");
    setIsNegative(false);
  };

  return {
    num1,
    num2,
    result,
    isNegative,
    setNum1,
    setNum2,
    performOperation,
    clear,
  };
};
