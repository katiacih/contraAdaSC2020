import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { StyleSheet, css } from 'aphrodite/no-important';


export type Article = {
  title: string,
  description: string,
  linkText: string,
  name:string
  image:string,
  imageText: string
}

const post: Article = {
  title: '',
  description: '',
  linkText: '',
  name:'Image',
  image:'',
  imageText:'',
}

export default function MainArtigo() {


  return (
      <Grid item md={6}>
          <div className={css(styles.mainFeaturedPostContent)}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </div>
        </Grid>
  );
}



const styles = StyleSheet.create({
  
  mainFeaturedPostContent: {
    position: 'relative',
    padding:'12px'
  },
  imgContainer: {
     width: '100%',
     height: '500px',
  }


});
  