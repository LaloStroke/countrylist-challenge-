import { createContext, useReducer, useState } from "react";
import storeReducer, { initialState } from "./storeReducer";

const StoreContext = createContext(initialState as any);

const StoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialState);
  return <StoreContext.Provider value={[store, dispatch]}>{children}</StoreContext.Provider>;
};

export { StoreContext };
export default StoreProvider;
