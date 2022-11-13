import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import "./CountryList.css";

const CountryList: React.FC<{ countries: Country[] }> = ({ countries }): JSX.Element => {
  return (
    <div>
      <div className="countrylist">
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
