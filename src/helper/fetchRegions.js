const fetchRegions = async (region, date) => fetch(`https://api.covid19tracking.narrativa.com/api/${date}/country/${region}`)
  .then((response) => response.json())
  .then((response) => ({ countryData: response.dates[date].countries }));

export default fetchRegions;
