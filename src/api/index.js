import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const apiUrl = 'https://api.covid19india.org';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchCountryData = async (country) => {
  let changeableUrl = !country ? url : `${url}/countries/${country}`;
  try {
      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
      return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
      console.log("Error 1", error);
  }
}

export const fetchDailyData = async () => {
  try {
      const { data } = await axios.get(`${url}/daily`);
      const modifiedData = data.map(dailyData => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate
      }));
      return modifiedData;
  } catch (error) {
      console.log("Error 2", error)
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};


export const fetchIndiaData = async () => {
  try {
      const {data : {statewise}}  = await axios.get(`${apiUrl}/data.json`);
      // const stateData = data.filter((state) => state.state === "Tamil Nadu")
      const stateData = statewise.filter((a, b) => a.state!=='Total')
          .sort((a, b) => parseInt(b.confirmed) - parseInt(a.confirmed))
          .map(({ state, confirmed, active, recovered,
              deaths, lastupdatedtime, deltaconfirmed, deltadeaths, deltarecovered}) => {
              return {
                  stateName: state,
                  confirmed: parseInt(confirmed),
                  active: parseInt(active),
                  recovered: parseInt(recovered),
                  deaths: parseInt(deaths),
                  deltaconfirmed: parseInt(deltaconfirmed),
                  deltarecovered: parseInt(deltarecovered),
                  deltadeaths: parseInt(deltadeaths),
                  lastUpdated: lastupdatedtime
              }
          });
      const totData = statewise.filter((a, b) => a.state==='Total')
          .map(({  confirmed, recovered,
              deaths, deltaconfirmed, deltadeaths, deltarecovered}) => {
                  return {
                      confirmed: {value: parseInt(confirmed)},
                      recovered: {value: parseInt(recovered)},
                      deaths: {value: parseInt(deaths)},
                      deltaconfirmed: parseInt(deltaconfirmed),
                      deltarecovered: parseInt(deltarecovered),
                      deltadeaths: parseInt(deltadeaths),
                  }
              });
      return { stateData, totData };
  } catch (error) {
      console.log("Error 3", error);
  }
}

export const fetchIndiaGraphData = async () => {
  try {
      const {data : {cases_time_series}}  = await axios.get(`${apiUrl}/data.json`);
      // const stateData = data.filter((state) => state.state === "Tamil Nadu")
      const graphData = cases_time_series
          .map(({ dailyconfirmed, dailydeceased, dailyrecovered, date}) => {
              return {
                  date,
                  confirmed: parseInt(dailyconfirmed),
                  recovered: parseInt(dailyrecovered),
                  deaths: parseInt(dailydeceased),
              }
          });
      return graphData;
  } catch (error) {
      console.log("Error 4", error);
  }
}