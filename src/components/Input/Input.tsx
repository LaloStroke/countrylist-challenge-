import React from "react";

const Input: React.FC<{
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: JSX.Element;
}> = ({ placeholder, value, icon, onChange }): JSX.Element => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onInput={(event) => onChange(event as React.ChangeEvent<HTMLInputElement>)}
    />
  );
};

export default Input;
