import { Grid } from '@material-ui/core';
import React from 'react';
import styles from './Cards.module.css';
import IndividualCard from './IndividualCard';

const cardObj = [
  {
    name: 'Infected',
    subhead: 'Number of active cases of COVID-19.', 
  },
  {
    name: 'Recovered',
    subhead: 'Number of recoveries from COVID-19.',
  },
  {
    name: 'Deaths',
    subhead: 'Number of deaths caused by COVID-19.',
  },
]

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return 'Loading...';
  }

  const cardsRender =  
    cardObj.map((card, i) => {
    let cardValue = 0;
    if(card.name === 'Infected')
      cardValue = confirmed.value; 
    else if (card.name === 'Recovered')
      cardValue = recovered.value;
    else if (card.name === 'Deaths')
      cardValue = deaths.value  
    else
      cardValue = 1;
    return (
      <React.Fragment key={i}>
        <IndividualCard name={card.name} value={cardValue} subHead={card.subhead} date={lastUpdate}/>
      </React.Fragment>
    )
    }
    )

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsRender}
      </Grid>
    </div>
  );
};
export default Info;
