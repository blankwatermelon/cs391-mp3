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
import { useCalculator } from "./useCalculator";

export default function Calculator() {
  const {
    num1,
    num2,
    result,
    isNegative,
    setNum1,
    setNum2,
    performOperation,
    clear,
  } = useCalculator();

  //  try to reduce redunfancy of displayResult using custom hook 
  const doAdd = () => performOperation((n1, n2) => n1 + n2);

  const doSub = () => performOperation((n1, n2) => n1 - n2);

  const doMulti = () => performOperation((n1, n2) => n1 * n2);

  const doDiv = () =>
    performOperation((n1, n2) => {
      if (n2 === 0) return "Div by zero";
      return n1 / n2;
    });

  const doPower = () =>
    performOperation((n1, n2) => {
      if (n2 === 0) return 1;
      let result = 1;
      for (let i = 0; i < Math.abs(n2); i++) {
        result *= n1;
      }
      return n2 < 0 ? 1 / result : result;
    });

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
        <CalcButton onClick={doPower}>*</CalcButton>
        <CalcButton onClick={clear}>Clear</CalcButton>
      </CalcButtons>

      <CalcOutputH3>Result:</CalcOutputH3>
      <CalcOutputP style={{ color: isNegative ? "red" : "" }}>
        {result}
      </CalcOutputP>
    </CalcDiv>
  );
}
