import React from "react";
import "./CountryFilter.css";

const Input: React.FC<{
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: JSX.Element;
}> = ({ placeholder, value, icon, onChange }): JSX.Element => {
  return (
    <div className="input">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="input__field"
        placeholder={placeholder}
        value={value}
        onInput={(event) => onChange(event as React.ChangeEvent<HTMLInputElement>)}
      />
    </div>
  );
};

export default Input;
