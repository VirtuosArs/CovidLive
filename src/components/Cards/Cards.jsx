import { Grid, Typography } from '@material-ui/core';
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


const Info = ({ data }) => {

  const { confirmed, recovered, deaths, lastUpdate, deltaconfirmed, deltadeaths, deltarecovered } 
            = (data && data.totData) ? data.totData[0] : data;

  if (!confirmed) {
    return 'Loading...';
  }

  const cardsRender =  
    cardObj.map((card, i) => {
    let cardValue = 0;
    let delta = 0;
    let dColor = 'grey';
    if(card.name === 'Infected') {
      cardValue = confirmed.value; 
      delta = deltaconfirmed;
      dColor = 'blue';
    }  
    else if (card.name === 'Recovered') {
      cardValue = recovered.value;
      delta = deltarecovered;
      dColor = 'green';
    }
    else if (card.name === 'Deaths') {
      cardValue = deaths.value  
      delta = deltadeaths;
      dColor = 'red';
    }
    else {
      cardValue = 0;
      delta = 0;
      dColor = 'grey';
    }
    return (
      <React.Fragment key={i}>
        <IndividualCard name={card.name} value={cardValue} subHead={card.subhead} deltaconfirmed={delta} deltaColor={dColor}/>
      </React.Fragment>
    )
    }
    )

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        { lastUpdate && <Grid item xs={12} >
          <Typography color="textSecondary" gutterBottom className={styles.refreshDate}>
              Data last refreshed: {new Date(lastUpdate).toDateString()}
          </Typography>
        </Grid>}
        {cardsRender}
      </Grid>
    </div>
  );
};
export default Info;
