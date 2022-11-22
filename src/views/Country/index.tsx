import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useMutation from "../../hooks/useMutation";

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
  }, [code]);
  return (
    <div>
      <div>
        <button onClick={handleClick}>Back</button>
      </div>
      <div>
        {loading && <div>Loading...</div>}
        {!isSuccess && !loading && <div>Something went wrong :c</div>}
        {isSuccess && !loading && data && (
          <div>
            <div>
              <img src={data.country.flags.png} />
            </div>
            <div>
              <strong>
                <h2>{data.country.name.common}</h2>
              </strong>
              <p>
                <strong>Native Name:</strong>
                {data.country.nativeNames.length !== 0 ? (
                  data.country.nativeNames.map((name: string, index: number) => (
                    <span key={index}>{name}</span>
                  ))
                ) : (
                  <span>Not Available</span>
                )}
              </p>
              <p>
                <strong>Population:</strong>
                {validation(data.country.population)}
              </p>
              <p>
                <strong>Region:</strong>
                {validation(data.country.region)}
              </p>
              <p>
                <strong>Capital:</strong>
                {validation(data.country.capital)}
              </p>
            </div>
            <div>
              <strong>Border Countries:</strong>
              {data.country.borders.length !== 0 ? (
                data.country.borders.map((name: string) => {
                  return (
                    <Link to={`/country/${name.toLowerCase()}`} key={name}>
                      <button>{name}</button>
                    </Link>
                  );
                })
              ) : (
                <span>There's none border countries :c</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
