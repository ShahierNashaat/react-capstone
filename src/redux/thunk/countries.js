import fetchCountries from '../../helper/fetchCountries';
import getCountriesAction from '../actions/countries';

const getCountries = (date) => async (dispatch) => {
  const data = await fetchCountries(date);
  dispatch(getCountriesAction(data));
};

export default getCountries;
