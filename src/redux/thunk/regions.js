import fetchRegions from '../../helper/fetchRegions';
import getRegionsAction from '../actions/regions';

const getRegions = (region, date) => async (dispatch) => {
  const data = await fetchRegions(region, date);
  dispatch(getRegionsAction(data));
};

export default getRegions;
