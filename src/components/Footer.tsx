import React, { useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Typography from '@material-ui/core/Typography';
import LogoTipo from './Logotipo';
import FormatQuote from '@material-ui/icons/FormatQuote';
function Footer () {

  return(
    <div className={css(styles.footer)}>

      <div className={css(styles.containerLogo)}>
        <LogoTipo/>
      </div>

      <div className={css(styles.fraseMichele)}>
        <FormatQuote style={{ color: '#ff66c4' }}/>
        <Typography variant="body2" 
          className={css(styles.texto)} gutterBottom>
        Como mulheres, temos todas que apoiar umas às outras.
        </Typography>
        <Typography variant="body2" 
          className={css(styles.texto)}>
            Michelle Obama  
          </Typography>
        <FormatQuote style={{ color: '#ff66c4' }}/>
      </div>

      <div className={css(styles.produzidoPor)}>
        <Typography variant="body2" 
        
        className={css(styles.textoFilhaAda)}>
          Produzido 
        </Typography>
        <Typography variant="body2" 
        className={css(styles.textoFilhaAda)}>
          por  
        </Typography>
        <Typography variant="body2" 
        className={css(styles.textoFilhaAda)}>
          Filhas de Ada  
        </Typography>
      </div>
      
    </div>

  );

}
export default Footer;

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
    justifyContent: 'space-between',

    '@media only screen and (max-width: 900px)':{
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      textAlign: 'center',
      flexDirection: 'column',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    }
  },
  containerLogo: {
    marginLeft: '30px',
    
    '@media only screen and (max-width: 900px)':{
      display: 'none',
    }
  },
  texto:{
    fontStyle:'italic',
    color: 'var(--primary-color)',
  },
  textoFilhaAda:{
    fontStyle:'italic',
    color: 'var(--primary-color)',
    '@media only screen and (max-width: 900px)':{
      marginRight: '6px'
    }
  },
  fraseMichele: {
    '@media only screen and (max-width: 900px)':{
      display: 'none',
    }

  },
  produzidoPor: {
    marginRight: '30px',
    '@media only screen and (max-width: 900px)':{
      margin: '10px 0px 10px 0px',
      display: 'flex',
    }

  }


});