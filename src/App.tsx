import React from "react";
import Router from "./router";
import "./index.css";
import StoreProvider from "./store/storeProvider";

const App: React.FC = (): JSX.Element => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};

export default App;
