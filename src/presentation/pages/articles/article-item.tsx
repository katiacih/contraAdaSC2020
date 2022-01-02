import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { StyleSheet, css } from 'aphrodite/no-important';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {ArticleType} from './types';


function ArticleItem( { article}:{article: ArticleType} ) {

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={css(styles.card)}>
          <div className={css(styles.cardDetails)}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {article.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {article.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {article.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Ver mais...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={css(styles.cardMedia)} image={article.image} title={article.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}


export default ArticleItem;


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
});