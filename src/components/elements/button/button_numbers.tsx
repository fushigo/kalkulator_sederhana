import React from "react";

type Props = {
  children: React.ReactNode;
  onclick?: any;
};

const ButtonNumber = ({ children, onclick }: Props) => {
  return (
    <button
      onClick={onclick}
      type="button"
      className="w-12 h-12 text-black font-bold border-2 border-slate-300 rounded-full"
    >
      {" "}
      {children}
    </button>
  );
};

export default ButtonNumber;
