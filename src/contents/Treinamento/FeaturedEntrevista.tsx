import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import  Button  from '@material-ui/core/Button';

import { 

   useHistory 
} from "react-router-dom";

type processoType = {
  numero: string,
  title: string,
  description: string

}



const ProcessoList: processoType[] = [
  {
    numero: '1',
    title: 'Cadastrar seus dados',
    description: 'Rápido e fácil'
  },
  {
    numero: '2',
    title: 'Descreva suas competências',
    description: 'Você provavelmente já sabe o quanto é trabalhoso preencher tantos cadastros por isso simplificamos pra você.'
  },
]


function ProcessoItem( { processo }:{processo: processoType} ) {



  return (
    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card className={css(styles.card)} style={processo.numero === '2'? {margin:'20px 0px 0px 0px'}: {margin:'0px -20px 0px 0px'} }> 
          <div className={css(styles.cardDetails)}>
            <CardContent className={css(styles.cardContainer)}>
            <Typography className={css(styles.titleItem)} gutterBottom>
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


export default function FeaturedEntrevista() {

  let history = useHistory();


  const handleNavigator = () => {
    history.push('/agendar');
  }

  return (
      <div className={css(styles.container)}>
        {/* Area para agendar */}
        <div className={css(styles.areaParaAgendar)}>
          <Typography  variant='h3' className={css(styles.title)}>Agende seu aconselhamento em apenas dois passos.</Typography>
          <div className={css(styles.areaSubscribe)}>
            <Typography variant="caption" >Quais conselhos teriam mudado a sua vida? Às vezes as pessoas mais experientes sabem o que dizer, por já terem vivido mais e errado mais também.</Typography>
          </div>
          <div>
            <Button
              variant="contained"
              className={css(styles.btn)}
              onClick={handleNavigator}
              >Agendar</Button>
          </div>
        </div>

        {/* Processos */}
        <Grid container spacing={0} className={css(styles.areaProcessos)}>
        {ProcessoList.map((processo, i) => (
          <ProcessoItem key={i} processo={processo} />
        ))}
      </Grid>
      </div>

  );
}

const styles = StyleSheet.create({
  mainGrid: {
    marginTop: '16px',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    padding: '0px 20px'
  },
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent:'space-around',
  },
  card: {
    display: 'flex',
    margin: '0px',
    height: '450px',
  },
  cardContainer:{
    margin: '0px',
    
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    color:' var(--surface-focused-color)',
    '@media only screen and (max-width: 941px)':{
      margin: '20px',
     }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  titleItem: {
    fontSize: '112px',
    color: 'var(--rosa-light)',
    padding: '0px !important',

  },
  pos: {
    marginBottom: 12,
    
  },
  areaParaAgendar: {
    display:'flex',
    flex: '3',
    alignItems: 'center',
    justifyContent:'space-around',
    flexDirection: 'column',
    padding: '70px 0px',

    '@media only screen and (max-width: 941px)':{
     margin: '20px',
     padding: '10px 0px',
    }
  },
  areaSubscribe: {
    padding: '40px',
  },
  areaProcessos: {
    flex: '2',
    '@media only screen and (max-width: 941px)':{
      display: 'none',
    }
  }
,
  btn: {
    margin: '10px 0 30px',
    Border: '1px solid var(--secondary-color)',
    backgroundColor: 'var(--secondary-color)',
    color:'var(--text-primary-color)',

    ':hover': {
      backgroundColor: 'var(--secondary-color-dark)',
    }
  },
  
});

