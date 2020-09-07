import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VagaItem from './VagaItem';
import {VagaType} from '../../types';
import { Typography } from '@material-ui/core';

const VagasList: VagaType[] = [
  {
    title: 'Dev Junior',
    date: 'Hoje',
    description: '',
    salario: 'R$ 7k',
    empresa: 'FabircaDevs',
    contato: '11 3245-245',
    email: 'fabricaDevs@emial.com',

  
  },
  {
    title: 'Dev Junior',
    date: 'Hoje',
    description: '',
    salario: 'R$ 7k',
    empresa: 'FabircaDevs',
    contato: '11 3245-245',
    email: 'fabricaDevs@emial.com',
    
  
  },
  {
    title: 'Dev Junior',
    date: 'Hoje',
    description: '',
    salario: 'R$ 7k',
    empresa: 'FabircaDevs',
    contato: '11 3245-245',
    email: 'fabricaDevs@emial.com',
    
  
  },
  
 
];


export default function FeaturedVagas() {

  return (
      <div>
        <CssBaseline />
        <Container maxWidth="lg">
        <main>
          <div style={{display: 'flex', justifyContent: 'center', margin: '30px 0px'}}>
            <Typography variant="caption" className={css(styles.title)}>Confira as vagas de emprego</Typography>
          </div>
          <Grid container spacing={4}>
            {VagasList.map((vaga, i) => (
              <VagaItem key={i} vaga={vaga} />
            ))}
          </Grid>
        </main>
        </Container>

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
    fontSize: '32px'
  }
});

