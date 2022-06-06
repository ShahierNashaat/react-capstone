const fetchCountries = async (date) => fetch(`https://api.covid19tracking.narrativa.com/api/${date}`)
  .then((response) => response.json())
  .then((response) => {
    if (!response.error) {
      return {
        countries: response.dates[date].countries,
        totalTodayConfirmed: response.total.today_confirmed,
      };
    }
    return {
      countries: {},
      totalTodayConfirmed: 0,
    };
  });

export default fetchCountries;
