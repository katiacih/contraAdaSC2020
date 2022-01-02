import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import VagaItem from './job-item';
import { JobType } from './types';
import { Typography } from '@material-ui/core';

const JobsList: JobType[] = [
  {
    title: 'Pessoa Desenvolvedora Backend',
    date: 'Hoje',
    description: '',
    salario: 'R$ 5k',
    empresa: 'SummerTech',
    contato: '11 1141-0110',
    email: 'SummerTech@emial.com',

  
  },
  {
    title: 'Pessoa Desenvolvedora Senior',
    date: 'Hoje',
    description: '',
    salario: 'R$ 10k',
    empresa: 'ForteNova',
    contato: '11 0101-5414',
    email: 'ForteNova@email.com',
    
  
  },
  {
    title: 'Cientista de dados',
    date: 'Hoje',
    description: '',
    salario: 'R$ 12k',
    empresa: 'IndieDevsTool',
    contato: '11 1234-3444',
    email: 'IndieDevsTool@mail.com',
    
  
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
            {JobsList.map((job, i) => (
              <VagaItem key={i} job={job} />
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

