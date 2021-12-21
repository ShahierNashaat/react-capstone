import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getCountries from '../../redux/thunk/countries';
import Header from '../Header';
import CountryItem from './CountryItem';

const Countries = () => {
  const { countries, totalTodayConfirmed } = useSelector((state) => state.countries);
  const [countriesToShow, setCountriesToShow] = useState({});
  let backgroudColorForCountry = '#dc4782';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    setCountriesToShow(countries);
  }, [countries]);

  const handleSearch = (e) => {
    let { value } = e.target;
    const dumpObject = {};
    Object.assign(dumpObject, countries);
    if (value !== '') {
      value = value[0].toUpperCase() + value.slice(1, value.length);
      const deletedKeys = Object.keys(dumpObject).filter((key) => !key.includes(value));
      for (let i = 0; i < deletedKeys.length; i += 1) {
        delete dumpObject[deletedKeys[i]];
      }
      setCountriesToShow(dumpObject);
    } else {
      setCountriesToShow(countries);
    }
  };

  return (
    <>
      <Header page="countries" />
      {(countriesToShow === undefined || totalTodayConfirmed === undefined) && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {!(countriesToShow === undefined || totalTodayConfirmed === undefined) && (
        <div>
          <div className="total-countries-div">
            <i className="fas fa-globe-americas fa-5x" />
            <div>
              <span>All Countries</span>
              <span>{`${totalTodayConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-countries">
            <p>CASES BY COUNTRIES</p>
            <input type="text" onChange={handleSearch} placeholder="Search" />
          </div>
          <div className="countries">
            {Object.keys(countriesToShow).map((country, index) => {
              if ((index + 1) % 2 === 0) {
                if (backgroudColorForCountry === '#dc4782') {
                  backgroudColorForCountry = '#cf4479';
                } else {
                  backgroudColorForCountry = '#dc4782';
                }
              }
              return (
                <CountryItem
                  key={country}
                  country={countries[country]}
                  backgroundColor={backgroudColorForCountry}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Countries;
