import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import "./Country.css";

export const Country: React.FC = (): JSX.Element => {
  const { code } = useParams();

  const { data, loading, isSuccess, fetchData } = useMutation("countryView");

  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(-1);
  };

  function validation(countriesdata: any) {
    if (countriesdata.length !== 0) {
      return <span>{countriesdata}</span>;
    } else {
      return <span>Not Available</span>;
    }
  }

  useEffect(() => {
    fetchData(`https://restcountries.com/v3.1/alpha/${code}`);
  }, [code, fetchData]);

  console.log(data, "data");
  return (
    <div className="CountryView">
      <div className="button">
        <button className="button_elements" onClick={handleClick}>
          <i className={`${"fa-solid fa-arrow-right"} ${"rotate"}`}></i>
          Back
        </button>
      </div>
      <div>
        {loading && <div>Loading...</div>}
        {!isSuccess && !loading && <div>Something went wrong :c</div>}
        {isSuccess && !loading && data && (
          <div className="country_info">
            <div className="flag">
              <img
                className="flag_img"
                alt={`${data.country.name.common} flag`}
                src={data.country.flags.png}
              />
            </div>
            <div className="general_info">
              <div className="info">
                <div className="info_title">
                  <strong>
                    <h2>{data.country.name.common}</h2>
                  </strong>
                </div>
                <div className="info_1">
                  <div className="data">
                    <p>
                      <strong>Native Name: </strong>
                      {data.country.nativeNames.length !== 0 ? (
                        data.country.nativeNames.map((name: string, index: number) => (
                          <span key={index} className="span">
                            {name}
                          </span>
                        ))
                      ) : (
                        <span>Not Available</span>
                      )}
                    </p>
                    <p>
                      <strong>Population: </strong>
                      {validation(data.country.population)}
                    </p>
                    <p>
                      <strong>Region: </strong>
                      {validation(data.country.region)}
                    </p>
                    <p>
                      <strong>Sub Region: </strong>
                      {validation(data.country.subregion)}
                    </p>
                    <p>
                      <strong>Capital: </strong>
                      {validation(data.country.capital)}
                    </p>
                  </div>
                  <div className="data">
                    <p>
                      <strong>Top Level Domain: </strong>
                      {validation(data.country.tld)}
                    </p>
                    <p>
                      <strong>Currencies: </strong>
                      {validation(data.country.currencies)}
                    </p>
                    <p>
                      <strong>Languages: </strong>
                      {data.country.languages.length !== 0 ? (
                        data.country.languages.map((name: string, index: number) => (
                          <span key={index} className="span">
                            {name}
                          </span>
                        ))
                      ) : (
                        <span>Not Available</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border_info">
                <div>
                  <strong>Border Countries: </strong>
                </div>
                <div className="border_buttons">
                  {data.country.borders.length !== 0 ? (
                    data.country.borders.map((name: string) => {
                      return (
                        <Link to={`/country/${name.toLowerCase()}`} key={name}>
                          <button className="countries_button">{name}</button>
                        </Link>
                      );
                    })
                  ) : (
                    <span>There's none border countries :c</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
