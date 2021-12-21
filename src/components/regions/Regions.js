import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRegions from '../../redux/thunk/regions';
import Header from '../Header';

const Regions = () => {
  const { countryData } = useSelector((state) => state.regions);
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions(country));
  }, []);

  return (
    <>
      <Header page="regions" />
      {(countryData === undefined || Object.keys(countryData).indexOf(country) === -1) && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {countryData !== undefined && Object.keys(countryData).indexOf(country) !== -1 && (
        <div>
          <div className="total-regions-div">
            <i className="fas fa-map-marker-alt fa-5x" />
            <div>
              <span>{country}</span>
              <span>{`${countryData[country].today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-regions">
            CASES BY REGIONS
          </div>
          <div className="regions">
            {countryData[country].regions.length === 0 && (
              <div className="no-regions"><p>No Regions Available</p></div>
            )}
            {countryData[country].regions.length !== 0
              && countryData[country].regions.map((region) => (
                <div key={region.id}>
                  <span>{region.name}</span>
                  <span>
                    {`${region.today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases `}
                    <i className="fas fa-arrow-circle-right" />
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Regions;
