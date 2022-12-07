import React, { ReactNode } from "react";
import { useSelectContext } from "../SelectContext";
import "./Option.css";

const SelectOption: React.FC<{ value: string; children: ReactNode | ReactNode[] }> = ({
  value,
  children
}): JSX.Element => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li className="option" onClick={() => changeSelectedOption(value)}>
      {children}
    </li>
  );
};

export default SelectOption;
