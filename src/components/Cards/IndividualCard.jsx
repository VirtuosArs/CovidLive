import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Info = ({ name, value, subHead, date }) => {
  const [raised, setRaised] = useState(false);

  // console.log("Prop==", props)

  const onMouseOver = () => {
    setRaised(true);
  }

  const onMouseOut = () => {
    setRaised(false);
  }

  function temperatureClassname(temp){
  
    switch (temp) {
      case 'Infected': return cx(styles.card, styles.infected, styles.newCard)
      case 'Recovered': return cx(styles.card, styles.recovered, styles.newCard)
      case 'Deaths': return cx(styles.card, styles.deaths, styles.newCard)
      default : return cx(styles.card, styles.infected, styles.newCard)
    }
  }

  return (
    <>
      <Grid item xs={12} md={3} >
        <Card 
        onMouseOver={() => onMouseOver()}
        onMouseOut={() => onMouseOut()}
        raised={raised}
        className={temperatureClassname(name)}
        >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <CountUp start={0} end={value} duration={1.5} separator="," />
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {new Date(date).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            {subHead}
          </Typography>
        </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default Info;
