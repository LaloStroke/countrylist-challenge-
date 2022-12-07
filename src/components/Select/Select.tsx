import React, { useRef, useState, useEffect, ReactNode } from "react";
import { SelectContext } from "./SelectContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./Select.css";

const Select: React.FC<{
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  placeholder?: string;
  selectHandler?: (values: any) => void;
}> = ({ children, selectHandler, defaultValue, placeholder }): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const selectPlaceHolder = placeholder || "Select an option";
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => setIsOpen(false);

  useOnClickOutside(selectRef, handleClickOutside);
  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    if (selectedOption && selectHandler) {
      selectHandler(selectedOption);
    }
  }, [selectHandler, selectedOption]);

  return (
    <SelectContext.Provider value={{ selectedOption, changeSelectedOption: updateSelectedOption }}>
      <div className="select" ref={selectRef} onClick={handleIsOpen}>
        <span className="select__span">
          {selectedOption.length > 0 ? selectedOption : selectPlaceHolder}
          <i className={`${"fa-solid fa-caret-up"} ${isOpen ? "" : "rotate"}`}></i>
        </span>
        {isOpen && <ul className="select__options">{children}</ul>}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
