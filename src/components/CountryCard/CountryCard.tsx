import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard: React.FC<{ country: Country }> = ({ country }): JSX.Element => {
  return (
    <Link className="countryCard" to={`/country/${country.cca3.toLowerCase()}`}>
      <img className="countryCard_img" src={country.flags.png} alt={country.name.common} />

      <div className="countryCard_info">
        <strong>
          <h2 className="countryCard_info_name">{country.name.common}</h2>
        </strong>
        <div className="countryCard_info_data">
          <p>
            <strong>Population: </strong>
            <span>{country.population}</span>
          </p>
          <p>
            <strong>Region: </strong>
            <span>{country.region}</span>
          </p>
          <p>
            <strong>Capital: </strong>
            <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
