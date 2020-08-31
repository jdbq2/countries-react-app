const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        countries: action.payload,
      };
    case "LOADING_DATA":
      return {
        ...state,
        loading: state.loading === false ? true : false,
      };
    case "SET_COUNTRY_DATA":
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
