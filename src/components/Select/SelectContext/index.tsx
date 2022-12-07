import { createContext, useContext } from "react";

const SelectContext = createContext<{
  selectedOption: string;
  changeSelectedOption: (option: string) => void;
}>({ selectedOption: "", changeSelectedOption: (option) => {} });

const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectContextProvider");
  }
  return context;
};

export { SelectContext, useSelectContext };
