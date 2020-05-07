import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';
import React, { useState } from 'react';
import CountUp from 'react-countup';
import Delta from '../Delta/Delta';
import styles from './Cards.module.css';

const Info = ({ name, value, subHead, deltaconfirmed, deltaColor }) => {
  const [raised, setRaised] = useState(false);


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
          <Typography variant='h2' gutterBottom className={cx(styles.mainTitle)}>
            {name}
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom className={cx(styles.countCard)}>
            <CountUp start={0} end={value} duration={1} separator="," />
          </Typography>
          {/* <Typography color="textSecondary" gutterBottom>
            {new Date(date).toDateString()}
          </Typography> */}
          <Typography variant="body2" component="p">
            {subHead}
          </Typography>
          {deltaconfirmed > 0 ? 
          <Delta inpCnt={deltaconfirmed} color={deltaColor} size='med' fromCard={true}/>
          : null}
        </CardContent>
        </Card>
      </Grid>
    </>
  );
};
export default Info;
