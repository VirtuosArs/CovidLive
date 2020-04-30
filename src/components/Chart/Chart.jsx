import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styles from './Chart.module.css';


// const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
//   const [dailyData, setDailyData] = useState({});
//   const [graphData, setGraphData] = useState([]);

//   useEffect(() => {
//     const fetchMyAPI = async () => {
//       let initialDailyData = {};
//       if(country === 'India') {
//         console.log("Set India data");
//         const fetchData = async () => {
//             setDailyData(await fetchIndiaData());
//         }
//         fetchData();
//         const fetchGraphData = async () => {
//             setGraphData(await fetchIndiaGraphData());
//         }
//         fetchGraphData();
//       }
//       initialDailyData = await fetchDailyData();

//       setDailyData(initialDailyData);
//     };

//     fetchMyAPI();
//   }, [country]);

//   const barChart = (
//     confirmed ? (
//       <Bar
//         data={{
//           labels: ['Infected', 'Recovered', 'Deaths'],
//           datasets: [
//             {
//               label: 'People',
//               backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//               data: [confirmed.value, recovered.value, deaths.value],
//             },
//           ],
//         }}
//         options={{
//           legend: { display: false },
//           title: { display: true, text: `Current state in ${country}` },
//         }}
//       />
//     ) : null
//   );

//   const lineChart = (
//     dailyData[0] ? (
//       <Line
//         data={{
//           labels: dailyData.map(({ date }) => date),
//           datasets: [{
//             data: dailyData.map((data) => data.confirmed),
//             label: 'Infected',
//             borderColor: '#3333ff',
//             fill: true,
//           }, {
//             data: dailyData.map((data) => data.deaths),
//             label: 'Deaths',
//             borderColor: 'red',
//             backgroundColor: 'rgba(255, 0, 0, 0.5)',
//             fill: true,
//           },
//           ],
//         }}
//       />
//     ) : null
//   );

//   return (
//     <div className={styles.container}>
//       {country ? barChart : lineChart}
//     </div>
//   );
// };

// export default Chart;


const Chart = ({ graphData, country }) => {

  let dataset = [], title = '', isGraphDataArr = Array.isArray(graphData);

  if (country === 'India' && isGraphDataArr && graphData) {
      dataset = [{
          data: isGraphDataArr ? graphData.map(({ confirmed }) => confirmed) : [],
          label: 'Confirmed',
          borderColor: 'rgba(0, 0, 255, 0.5)',
          fill: true
      }, {
          data: isGraphDataArr ? graphData.map(({ recovered }) => recovered) : [],
          label: 'Recovered',
          borderColor: 'rgba(0, 255, 0, 0.5)',
          fill: true
      }, {
          data: isGraphDataArr ? graphData.map(({ deaths }) => deaths) : [],
          label: 'Deceased',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
      }];
      title = `Daily Cases Timeline`;
  } else if (isGraphDataArr && graphData) {
      dataset = [{
          data: graphData.map(({ confirmed }) => confirmed),
          label: 'Confirmed',
          borderColor: 'rgba(0, 0, 255, 0.5)',
          fill: true
      }, {
          data: graphData.map(({ deaths }) => deaths),
          label: 'Deceased',
          borderColor: 'rgba(255, 0, 0, 0.5)',
          fill: true
      }];
      title = `Daily Cases Growth`;
  } else if (!isGraphDataArr && graphData && graphData.confirmed ) {
      dataset = [{
          label: 'People',
          backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)'],
          data: [graphData.confirmed.value, graphData.recovered.value, graphData.deaths.value]
      }];
      title = `Current status in ${country}`;
  }

  const lineChart = (
      graphData && graphData[0] ?
          <Line data={{
              labels: graphData.map(({ date }) => date),
              datasets: dataset
          }} 
          options={{
              title: { display: true, text: title }
          }}/> : null
  );

  const barChart = graphData && graphData.confirmed ?
      <Bar
          data={{
              labels: ['Confirmed', 'Recovered', 'Deceased'],
              datasets: dataset
          }}
          options={{
              legend: { display: false },
              title: { display: true, text: title }
          }} /> : null;

  return (
      <div className={styles.container}>
          {country ? (country === 'India' ? lineChart : barChart) : null}
          {!country ? lineChart : null}
          {/* {country === 'India' ? lineChart : null} */}
      </div>
  );
}

export default Chart;
