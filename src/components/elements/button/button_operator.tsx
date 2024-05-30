import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: any;
  width?: 12 | 24;
  heigth?: string;
};

const ButtonOperator = ({
  children,
  width = 12,
  heigth = "12",
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-${width} h-${heigth} rounded-full bg-[#B99AD6] text-[#ACFEF0]`}
    >
      {children}
    </button>
  );
};

export default ButtonOperator;
