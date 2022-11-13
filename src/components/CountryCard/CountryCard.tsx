import React from "react";
import { Link } from "react-router-dom";

const CountryCard: React.FC<{ country: Country }> = ({ country }): JSX.Element => {
  return (
    <Link to={`/country/${country.name.common.toLowerCase()}`}>
      <img src={country.flags.png} alt={country.name.common} />
      <div>
        <strong>
          <h2>{country.name.common}</h2>
        </strong>

        <p>
          <strong>Population:</strong>
          <span>{country.population}</span>
        </p>
        <p>
          <strong>Region:</strong>
          <span>{country.region}</span>
        </p>
        <p>
          <strong>Capital:</strong>
          <span>{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
