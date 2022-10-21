declare interface StoreState {
  darkMode: boolean;
  countriesData: unknown[];
}

declare enum StoreActionTypes {
  FETCH_COUNTRIES_DATA = "FETCH_COUNTRIES_DATA",
  SET_DARK_MODE = "SET_DARK_MODE"
}

declare interface StoreAction {
  type: StoreActionTypes;
  payload: unknown;
}
