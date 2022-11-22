import React, { useContext, useEffect, useState } from "react";
import CountryList from "../../components/CountryList/CountryList";
import useQuery from "../../hooks/useQuery";
import { StoreContext } from "../../store/storeProvider";
import { StoreActionTypes } from "../../store/storeReducer";
import Input from "../../components/Input/Input";
import useMutation from "../../hooks/useMutation";
import Search from "../../components/Select/Select";

export const Home: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [store, dispatch] = useContext(StoreContext);
  const { data, isSuccess, loading } = useQuery("https://restcountries.com/v3.1/all", "countries");
  const { fetchData, data: filteredData, isSuccess: isOk } = useMutation("countries");
  const REGION: Regions[] = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
  const [region, setRegion] = useState<Regions>("All");

  const {
    countriesData: { countries, filteredCountries, regionCountries }
  } = store;

  const handleSelect = (region: Regions) => {
    setRegion(region);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({ type: StoreActionTypes.FETCH_COUNTRIES_DATA, payload: data.countries });
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch({ type: StoreActionTypes.FILTER_COUNTRIES_DATA, payload: value });
  }, [value]);

  useEffect(() => {
    if (region === "All") {
      dispatch({ type: StoreActionTypes.REGION_COUNTRIES_FILTRED, payload: "All" });
      return;
    }
    fetchData(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`);
  }, [region]);

  useEffect(() => {
    if (isOk) {
      dispatch({
        type: StoreActionTypes.REGION_COUNTRIES_FILTRED,
        payload: filteredData.countries
      });
    }
  }, [filteredData]);

  return (
    <div>
      <div>
        <Input value={value} placeholder="Search for a country..." onChange={handleInput} />
        <Search regions={REGION} handleSelect={handleSelect} />
      </div>
      <div>
        {loading && countries.length === 0 && <div>Loading...</div>}
        {!isSuccess && !loading && <div>Something went wrong :c</div>}
        {filteredCountries.length > 0 && <CountryList countries={filteredCountries} />}
        {region !== "All" && filteredCountries.length === 0 && !value && (
          <CountryList countries={regionCountries} />
        )}
        {countries && region === "All" && !value && <CountryList countries={countries} />}
        {value && filteredCountries.length === 0 && <div>No results found</div>}
      </div>
    </div>
  );
};
