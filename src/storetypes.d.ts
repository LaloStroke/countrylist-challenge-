declare interface CountriesData {
  countries: Country[];
  filteredCountries: Country[];
  regionCountries: Country[];
}

declare interface StoreState {
  darkMode: boolean;
  countriesData: CountriesData;
}


declare interface StoreAction {
  type: StoreActionTypes;
  payload: string | boolean | Country[];
}
