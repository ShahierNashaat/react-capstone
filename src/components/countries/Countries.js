import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import date from '../../helper/currentDate';
import getCountries from '../../redux/thunk/countries';
import Header from '../Header';
import CountryItem from './CountryItem';

const Countries = () => {
  const { countries, totalTodayConfirmed } = useSelector((state) => state.countries);
  const [countriesToShow, setCountriesToShow] = useState({});
  const [choosenDate, setChoosenDate] = useState(date());
  let backgroudColorForCountry = '#dc4782';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries(choosenDate));
  }, []);

  const handleSearch = () => {
    let searchValue = '';
    if (document.getElementById('search-input')) {
      searchValue = document.getElementById('search-input').value;
    }

    const dumpObject = {};
    Object.assign(dumpObject, countries);
    if (searchValue !== '') {
      searchValue = searchValue.toLowerCase();
      const deletedKeys = Object.keys(dumpObject).filter((key) => !key.toLowerCase()
        .includes(searchValue));
      for (let i = 0; i < deletedKeys.length; i += 1) {
        delete dumpObject[deletedKeys[i]];
      }
      setCountriesToShow(dumpObject);
    } else {
      setCountriesToShow(countries);
    }
  };

  useEffect(() => {
    setCountriesToShow(countries);
    handleSearch();
  }, [countries]);

  const handleDate = (e) => {
    const changedDate = e.target.value.toString();
    setChoosenDate(changedDate);
    dispatch(getCountries(changedDate));
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
            <div className="filter-inputs">
              <input type="text" id="search-input" onChange={handleSearch} placeholder="Search" />
              <input type="date" id="date-input" onChange={handleDate} />
            </div>
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
                  date={choosenDate}
                />
              );
            })}
          </div>
        </div>
      )}
      {countries !== undefined && Object.keys(countries).length === 0 && (
        <div className="no-data">
          {`No data for ${choosenDate} yet.`}
        </div>
      )}
    </>
  );
};

export default Countries;
