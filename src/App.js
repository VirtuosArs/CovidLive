import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React from 'react';
import { fetchCountryData, fetchDailyData, fetchIndiaData, fetchIndiaGraphData } from './api/';
import styles from './App.module.css';
import './App.scss';
import { Cards, Chart, ChoroplethMap, CountryPicker, Footer, Header, Table } from './components';

class App extends React.Component {
  state = {
    data: {},
    graphData: [],
    country: '',
  }

  async componentDidMount() {
    // const data = await fetchData();
    const data = await fetchCountryData();
    const graphData = await fetchDailyData();

    this.setState({ data, graphData });
  }

  handleCountryChange = async (country) => {
    let data = {};
    let graphData = [];

    if(country === 'India') {
      data = await fetchIndiaData();
      graphData = await fetchIndiaGraphData();
    }
    else if(country !== 'India' && country) {
      data = await fetchCountryData(country);
      graphData = await fetchCountryData(country);
    }
    else {
      data = await fetchCountryData();
      graphData = await fetchDailyData();
    }
    await this.setState({ data, country , graphData });
  }

  render() {
    const { data, country, graphData } = this.state;

    return (
      <>
      <div className="App">
        <Header />
        <Container>
          <Box my={2}>
            <div className={styles.container}>
              {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Cards data={data} />
              {/* <Chart data={data} country={country} /> */}
              {graphData && country !== 'India' && <Chart graphData={graphData} country={country} />}
              {
                country === 'India' && graphData && data &&
                <>
                {/* <DataTable data={data} country={country}/> */}
                <div className="Home">
                <div className="home-left">
                  {data && data.stateData && <ChoroplethMap states={data.stateData}/> }
                </div>
                <div className="home-right">
                  <Table states={data.stateData} />
                </div>
                </div>
                <Chart graphData={graphData} country={country} />
                </>
              } 
            </div>
          </Box>
        </Container>
        {graphData ? <Footer /> : <>
          <p>Loading...</p>
        </>
        }
      </div>
      </>
    );
  }
}

export default App;