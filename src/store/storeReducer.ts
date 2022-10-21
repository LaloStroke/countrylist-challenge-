export const initialState: StoreState = {
  darkMode: true,
  countriesData: []
};
const StoreReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case StoreActionTypes.FETCH_COUNTRIES_DATA:
      return {
        ...state,
        countriesData: action.payload
      };
  }
};

export default StoreReducer;
