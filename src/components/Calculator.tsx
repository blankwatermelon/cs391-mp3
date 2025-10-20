import { useState } from "react";
import {
  CalcDiv,
  CalcDisplayH3,
  CalcInputs,
  CalcLabel,
  CalcInput,
  CalcButtons,
  CalcButton,
  CalcOutputH3,
  CalcOutputP,
} from "./styles";

export default function Calculator() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("Enter numbers");
  const [isNegative, setIsNegative] = useState<boolean>(false);

  // display result func with red as neg styling
  const displayResult = (resultValue: number | string) => {
    // result can be num or string
    setResult(String(resultValue));

    // check if result is negative for styling

    if (typeof resultValue === "number" && resultValue < 0) {
      setIsNegative(true);
    } else {
      setIsNegative(false);
    }
  };

  const doAdd = () => {
    const result = Number(num1) + Number(num2);
    displayResult(result);
  };

  const doSub = () => {
    const result = Number(num1) - Number(num2);
    displayResult(result);
  };

  const doMulti = () => {
    const result = Number(num1) * Number(num2);
    displayResult(result);
  };

  const doDiv = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (n2 === 0) {
      setResult("div by 0");
      setIsNegative(false);
      return;
    }

    const result = n1 / n2;
    displayResult(result);
  };

  const doPower = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (n2 === 0) {
      displayResult(1);
      return;
    }

    let result = 1;
    for (let i = 1; i < Math.abs(n2); i++) {
      result *= n1;
    }

    if (n2 < 0) {
      result = 1 / result;
    }

    displayResult(result);
  };

  const doClear = () => {
    setNum1("");
    setNum2("");
    setResult("Enter numbers and click an operation");
  };

  return (
    <CalcDiv>
      <CalcDisplayH3>Simple Calculator</CalcDisplayH3>
      <CalcInputs>
        <CalcLabel htmlFor="num1">First Number:</CalcLabel>
        <CalcInput
          type="number"
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />

        <CalcLabel htmlFor="num2">Second Number:</CalcLabel>
        <CalcInput
          type="number"
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </CalcInputs>

      <CalcButtons>
        <CalcButton onClick={doAdd}>+</CalcButton>
        <CalcButton onClick={doSub}>-</CalcButton>
        <CalcButton onClick={doMulti}>×</CalcButton>
        <CalcButton onClick={doDiv}>÷</CalcButton>
        <CalcButton onClick={doPower}>^</CalcButton>
        <CalcButton onClick={doClear}>Clear</CalcButton>
      </CalcButtons>

      <CalcOutputH3>Result:</CalcOutputH3>
      <CalcOutputP style={{ color: isNegative ? "red" : "" }}>
        {result}
      </CalcOutputP>
    </CalcDiv>
  );
}
