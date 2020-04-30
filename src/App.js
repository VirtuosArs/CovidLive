import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React from 'react';
import { fetchData } from './api/';
import styles from './App.module.css';
import { Cards, Chart, CountryPicker, Header } from './components';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
        <Header />
        <Container>
          <Box my={2}>
            <div className={styles.container}>
              {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
              <CountryPicker handleCountryChange={this.handleCountryChange} />
              <Cards data={data} />
              <Chart data={data} country={country} /> 
            </div>
          </Box>
        </Container>
      </>
    );
  }
}

export default App;