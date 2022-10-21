import { createContext, useReducer } from "react";
import StoreReducer, { initialState } from "./storeReducer";

const StoreContext = createContext(initialState as any);

const StoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
};

export { StoreContext };
export default StoreProvider;
