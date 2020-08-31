export const setData = (payload) => ({
  type: "SET_DATA",
  payload,
});

export const setCountryData = (payload) => ({
  type: "SET_COUNTRY_DATA",
  payload,
});

export const loadingData = () => ({
  type: "LOADING_DATA",
});

export const fetchGlobalData = () => {
  return (dispatch) => {
    dispatch(loadingData());
    fetch("https://restcountries.eu/rest/v2/all")
      .then((data) => data.json())
      .then((response) => {
        dispatch(setData(response));
        dispatch(loadingData());
      });
  };
};

export const fetchContinentData = (region) => {
  return (dispatch) => {
    dispatch(loadingData());
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then((data) => data.json())
      .then((response) => {
        dispatch(setData(response));
        dispatch(loadingData());
      });
  };
};

export const fetchCountryData = (country_code) => {
  return (dispatch) => {
    dispatch(loadingData());
    fetch(`https://restcountries.eu/rest/v2/alpha/${country_code}`)
      .then((data) => data.json())
      .then((response) => {
        dispatch(setCountryData(response));
        dispatch(loadingData());
      });
  };
};
