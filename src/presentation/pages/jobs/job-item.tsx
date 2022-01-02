import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { StyleSheet, css } from 'aphrodite/no-important';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { JobType } from './types';


function JobItem( {job}:{job: JobType} ) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={css(styles.card)}>
          <div className={css(styles.cardDetails)}>
            <CardContent>
            <Typography className={css(styles.title)} color="textSecondary" gutterBottom>
            {job.empresa}
            </Typography>
              <Typography component="h2" variant="h5">
                {job.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {job.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {job.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Quero me candidatar
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default JobItem;


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