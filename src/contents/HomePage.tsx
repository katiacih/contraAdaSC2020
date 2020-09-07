import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import '../App.css';
import { Typography } from '@material-ui/core';
import  Button  from '@material-ui/core/Button';
import FeaturedArtigos from './Artigos/FeaturedArtigos';
import BannerLogo from '../resources/BannerLogo.svg';
import Paper from '@material-ui/core/Paper';
import FeaturedVagas from './Vagas/FeaturedVagas';
import FeaturedEntrevista from './Treinamento/FeaturedEntrevista';


function HomePage () {
    return (
      <div className={css(styles.container)}>

      {/* Seção 1 */}
        <div className={css(styles.section1)}>

          <div style={{display: 'flex'}}>

            {/* Card Roxo */}
            <Paper  elevation={3} className={css(styles.cardPink)}>
              <Paper elevation={5} className={css(styles.cardPurple)}>
                <Typography variant="h3" className={css(styles.titleCard)}>O que fazemos por você?</Typography>
                <Typography 
                  variant="caption" 
                  display="block" 
                  gutterBottom 
                  style={{padding: '0px 60px', fontSize:'18px'}}
                >Empoderamos mulheres, aceitamos quem elas são, e agregamos para que todas dentro do que são, sejam melhores no amanhã. Agende o seu conselho de amiga</Typography>
                <Button
                  variant="contained"
                  className={css(styles.btn)}
                >Começar Experiência</Button>
              </Paper>
            </Paper>
            {/* Imagem  garotas*/}
            <div className={css(styles.containerImage)}>
              <img src={BannerLogo} alt='banner' />
            </div>
          </div>
        </div>

        {/* Seção Como funciona */}
        <div className={css(styles.section)}>
           {/* Imagem  garotas*/}
          <div className={css(styles.containerImage)}>
            <img src={BannerLogo} alt='banner' />
          </div>
          <Paper  elevation={3} className={css(styles.cardPink)}>
            <Paper elevation={5} className={css(styles.cardPurple)}>
              <Typography variant="h3" className={css(styles.titleCard)}>O que fazemos por você?</Typography>
              <Typography 
                variant="caption" 
                display="block" 
                gutterBottom 
                style={{padding: '0px 60px', fontSize:'18px'}}
              >Empoderamos mulheres, aceitamos quem elas são, e agregamos para que todas dentro do que são, sejam melhores no amanhã. Agende o seu conselho de amiga</Typography>
              <Button
                variant="contained"
                className={css(styles.btn)}
              >Começar Experiência</Button>
            </Paper>
          </Paper>        
        </div>
       
        
        {/* Seção Treinamento/Entrevistas*/}
        <div className={css(styles.section)}>
          <FeaturedEntrevista/>
        </div>

         {/* Seção Vagas*/}
         <div className={css(styles.section)}>
         <FeaturedArtigos/>
        </div>

         {/* Seção Artigos*/}
        <div className={css(styles.section)}>
         <FeaturedVagas/>
        </div>

      </div>
      
    );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    fontFamily: 'Arial',
  },
  cardPurple: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    flex: 1,
    backgroundColor: 'var( --primary-color)',
    margin: '-25px 45px 26px -25px',
    color: 'var(--text-primary-color)',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    '@media only screen and (max-width: 900px)':{
      display: 'flex',
      width: '100%',
      margin: '0px',
      alignItems:'center',
      justifyContent: 'space-between',
    },

    '@media only screen and (max-width: 400px)':{
      display: 'flex',
      width: '100%',
      margin: '0px',
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
    }
  },
  cardPink: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    flex: 1,
    backgroundColor: 'var(--rosa-color)',
    color: 'var(--text-primary-color)',
    margin: '60px 60px',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    '@media only screen and (max-width: 900px)':{
      display: 'flex',
      width: '100%',
      margin: '20px',
      backgroundColor: 'transparent',
      alignItems:'center',
      justifyContent: 'space-between',
    },

    '@media only screen and (max-width: 400px)':{
      width: '100%',
      margin: '0px',
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
    }
},
  containerImage: {
    flex: '1',
    '@media only screen and (max-width: 941px)':{
      display: 'none',
    }


  },
  titleCard:{
    padding: '10px 96px',
    '@media only screen and (max-width: 941px)':{
      padding: '20px 0px',
      fontSize:'32px',
    },

  },
  section1: {
    width: '100%',
  },
  section: {
    padding: '80px 0px',
    width: '100%',
    '@media only screen and (max-width: 941px)':{
      padding: '0px',
     }
  },
  btn: {
    margin: '10px 0 30px',
    Border: '1px solid var(--secondary-color)',
    backgroundColor: 'var(--secondary-color)',
    color:'var(--text-primary-color)',

    ':hover': {
      backgroundColor: 'var(--secondary-color-dark)',
    }
  },
  agendarContainer:{
    fontFamily: 'sans-serif',
    fontSize: 12,
    flex: 1,
    backgroundColor: 'var( --primary-color)',
    margin:  '8px 50px 16px 0',
    color: 'var(--text-primary-color)',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    '@media only screen and (max-width: 900px)':{
      display: 'flex',
      width: '100%',
      margin: '0px',
      alignItems:'center',
      justifyContent: 'space-between',
    },

    '@media only screen and (max-width: 400px)':{
      display: 'flex',
      width: '100%',
      margin: '0px',
      alignItems:'center',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
    }

  }
});