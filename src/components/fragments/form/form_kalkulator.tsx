import { ButtonNumber, ButtonOperator } from "@/components/elements/button";

type FormKalkulatorProperties = {
  onNumberClick: any;
  onOperatorClick: any;
  onCleareClick: any;
  onEqualsClick: any;
};

const FormKalkulator = ({
  onNumberClick,
  onOperatorClick,
  onCleareClick,
  onEqualsClick,
}: FormKalkulatorProperties) => {
  // const handleNumberClick = (value: number) => {
  //   alert("Number clicked: " + value);
  // };

  // const handleOperatorClick = (value: string) => {
  //   alert("Operator clicked: " + value);
  // };

  return (
    <div className="w-full h-auto flex flex-col gap-4 justify-center">
      <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
        <ButtonOperator onClick={onCleareClick}>
          <p>C</p>
        </ButtonOperator>
        <ButtonOperator onClick={() => onOperatorClick("()")}>
          <p>( )</p>
        </ButtonOperator>
        <ButtonOperator onClick={() => onOperatorClick("%")}>
          <p>%</p>
        </ButtonOperator>
        <ButtonOperator onClick={() => onOperatorClick("/")}>
          <p>/</p>
        </ButtonOperator>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
        <ButtonNumber onclick={() => onNumberClick(7)}>
          <p>7</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(8)}>
          <p>8</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(9)}>
          <p>9</p>
        </ButtonNumber>
        <ButtonOperator onClick={() => onOperatorClick("x")}>
          <p>x</p>
        </ButtonOperator>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
        <ButtonNumber onclick={() => onNumberClick(4)}>
          <p>4</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(5)}>
          <p>5</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(6)}>
          <p>6</p>
        </ButtonNumber>
        <ButtonOperator onClick={() => onOperatorClick("-")}>
          <p>-</p>
        </ButtonOperator>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
        <ButtonNumber onclick={() => onNumberClick(1)}>
          <p>1</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(2)}>
          <p>2</p>
        </ButtonNumber>
        <ButtonNumber onclick={() => onNumberClick(3)}>
          <p>3</p>
        </ButtonNumber>
        <ButtonOperator onClick={() => onOperatorClick("+")}>
          <p>+</p>
        </ButtonOperator>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center gap-4">
        <ButtonNumber onclick={() => onNumberClick(0)}>
          <p>0</p>
        </ButtonNumber>
        <ButtonNumber>
          <p>.</p>
        </ButtonNumber>
        <ButtonOperator onClick={onEqualsClick}>
          <p>=</p>
        </ButtonOperator>
      </div>
    </div>
  );
};

export default FormKalkulator;
