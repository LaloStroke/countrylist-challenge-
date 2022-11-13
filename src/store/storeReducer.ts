import { Reducer } from "react";

export enum StoreActionTypes {
  FETCH_COUNTRIES_DATA = "FETCH_COUNTRIES_DATA",
  SET_DARK_MODE = "SET_DARK_MODE",
  FILTER_COUNTRIES_DATA = "FILTER_COUNTRIES_DATA",
  REGION_COUNTRIES_FILTRED = "REGION_COUNTRIES_FILTRED"
}

export const initialState: StoreState = {
  darkMode: true,
  countriesData: {
    countries: [],
    filteredCountries: [],
    regionCountries: []
  }
};
const storeReducer: Reducer<
  StoreState | any,
  {
    type: StoreActionTypes;
    payload: string | boolean | Country[];
  }
> = (store = initialState, action) => {
  switch (action.type) {
    case StoreActionTypes.FETCH_COUNTRIES_DATA:
      return {
        ...store,
        countriesData: {
          ...store.countriesData,
          countries: action.payload as Country[]
        }
      };

    case StoreActionTypes.FILTER_COUNTRIES_DATA:
      if (store.countriesData.regionCountries.length > 0) {
        const filteredCountries = store.countriesData.regionCountries.filter((country: Country) =>
          country.name.common.toLowerCase().includes((action.payload as string).toLowerCase())
        );
        return {
          ...store,
          countriesData: {
            ...store.countriesData,
            filteredCountries
          }
        };
      }
      const filteredCountries = store.countriesData.countries.filter((country: Country) =>
        country.name.common.toLowerCase().includes((action.payload as string).toLowerCase())
      );
      return {
        ...store,
        countriesData: {
          ...store.countriesData,
          filteredCountries
        }
      };
    case StoreActionTypes.REGION_COUNTRIES_FILTRED:
      if ((action.payload as string) === "All") {
        return {
          ...store,
          countriesData: {
            ...store.countriesData,
            filteredCountries: [],
            regionCountries: []
          }
        };
      }
      return {
        ...store,
        countriesData: {
          ...store.countriesData,
          filteredCountries: [],
          regionCountries: action.payload as Country[]
        }
      };

    default:
      return {
        ...store
      };
  }
};

export default storeReducer;
