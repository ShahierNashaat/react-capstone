import { useSelector } from 'react-redux';
import Header from '../Header';
import CountryItem from './CountryItem';

const Countries = () => {
  const { countries, totalTodayConfirmed } = useSelector((state) => state.countries);
  let backgroudColorForCountry = '#dc4782';

  if (countries === undefined || totalTodayConfirmed === undefined) {
    return (<div />);
  }

  return (
    <>
      <Header />
      {(countries === undefined || totalTodayConfirmed === undefined) && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {!(countries === undefined || totalTodayConfirmed === undefined) && (
        <div>
          <div className="total-countries-div">
            <i className="fas fa-globe-americas fa-5x" />
            <div>
              <span>All Countries</span>
              <span>{`${totalTodayConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-countries">
            CASES BY COUNTRIES
          </div>
          <div className="countries">
            {Object.keys(countries).map((country, index) => {
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
