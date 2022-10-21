import React from "react";
import CountryList from "../../components/CountryList";

export const Countries: React.FC = (): JSX.Element => {
  return (
    <div>
      Countries
      <CountryList />
    </div>
  );
};
