import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export function Footer () {

  return(
    <div className={css(styles.footer)}>
      <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      Produzido por Filha de Ada 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
      
    </div>

  );
}

const styles = StyleSheet.create({

  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'var(--bg-navbar)',
    textAlign: 'center',
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '10px 0px',

    '@media only screen and (max-width: 900px)':{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      flexDirection: 'column',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '10px 0px',
    }
  },
 

});