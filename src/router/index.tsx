import React, { useContext } from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Home } from "../views/Home";
import { Country } from "../views/Country";
import { StoreContext } from "../store/storeProvider";

const Router: React.FC = (): JSX.Element => {
  const [store] = useContext(StoreContext);
  const mainClass = store.darkMode ? "darkMode" : "lightMode";
  return (
    <BrowserRouter>
      <div className={`${mainClass} app`}>
        <Navbar />
        <div className="content app__element">
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<Country />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
