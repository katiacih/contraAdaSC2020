import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { StyleSheet, css } from 'aphrodite/no-important';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


type processoType = {
  numero: string,
  title: string,
  description: string
}


function VagaItem( { processo }:{processo: processoType} ) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={css(styles.card)}>
          <div className={css(styles.cardDetails)}>
            <CardContent>
            <Typography className={css(styles.title)} color="textSecondary" gutterBottom>
            {processo.numero}
            </Typography>
              <Typography component="h2" variant="h5">
                {processo.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {processo.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default VagaItem;


const styles = StyleSheet.create({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});