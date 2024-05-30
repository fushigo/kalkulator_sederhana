import { CiDark } from "react-icons/ci";
import { Inter } from "next/font/google";
import { TextField } from "@/components/fragments";
import { FormKalkulator } from "@/components/fragments";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [onInput, setOnInput] = useState("0");
  const [onValue, setValue] = useState("0");

  const operatorList = ["x", "/", "()", "+", "-", "%"];

  const handleOperatorClick = (operator: string) => {
    if (operatorList.includes(onInput.slice(-1))) {
      return;
    }
    setOnInput(onInput + operator);
  };

  const handleNumberClick = (number: number) => {
    if (onInput === "0") {
      return setOnInput(number.toString());
    }
    setOnInput(onInput + number);
  };

  const handleClearedClick = () => {
    setOnInput("0");
    setValue("0");
  };

  const handleEqualsClick = () => {
    try {
      const result = evaluateExpression(onInput.replace("x", "*"));
      setValue(result);
      setOnInput(result.toString());
    } catch (error) {
      setOnInput("Error");
    }
  };

  const evaluateExpression = (expression: string) => {
    const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, "");
    return new Function(`return ${sanitizedExpression}`)();
  };

  useEffect(() => {
    if (onInput === "0") {
      return;
    } else {
      if (!operatorList.includes(onInput.slice(-1))) {
        try {
          const result = evaluateExpression(onInput.replace("x", "*"));
          setValue(result);
        } catch (error) {
          setValue("Error");
        }
      }
    }
  }, [onInput]);

  return (
    <div
      className={`w-full h-screen px-8 py-4 bg-slate-200 flex flex-col items-center ${inter.className} gap-4`}
    >
      <div className="w-full max-w-xs h-44 border-2 bg-white shadow-md rounded-lg p-4 py-4 space-y-4 relative top-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">Kalkulator Sederhana</h1>
          <div>
            <CiDark size={25} className="hover:cursor-pointer" />
          </div>
        </div>
        <div>
          <TextField input={onInput} value={onValue} />
        </div>
        <div className="w-full max-w-xs h-auto bg-[#E9E0F3] shadow-md rounded-2xl p-8 space-y-4 absolute top-32 left-0 flex justify-center items-center">
          <FormKalkulator
            onOperatorClick={handleOperatorClick}
            onCleareClick={handleClearedClick}
            onEqualsClick={handleEqualsClick}
            onNumberClick={handleNumberClick}
          />
        </div>
      </div>
    </div>
  );
}
