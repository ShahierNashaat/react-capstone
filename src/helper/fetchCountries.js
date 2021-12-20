import date from './currentDate';

const fetchCountries = async () => fetch(`https://api.covid19tracking.narrativa.com/api/${date()}`)
  .then((response) => response.json())
  .then((response) => ({
    countries: response.dates[date()].countries,
    totalTodayConfirmed: response.total.today_confirmed,
  }));

export default fetchCountries;
