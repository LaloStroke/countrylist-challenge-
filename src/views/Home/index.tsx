import React from "react";
import CountryList from "../../components/CountryList";
import useQuery from "../../hooks/useQuery";

export const Home: React.FC = (): JSX.Element => {
  const { data } = useQuery("https://restcountries.com/v3.1/all");
  console.log("data", data);
  return (
    <div>
      Home
      <CountryList />
    </div>
  );
};
