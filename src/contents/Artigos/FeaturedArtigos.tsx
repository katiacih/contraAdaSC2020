import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainArtigo from './BannerArtigo';
import ArtigoItem from './ArtigoItem';
import {ArtigoType} from '../../types';
import andrea from '../../resources/andrea.jpg';
import dashboard from '../../resources/dashboard.jpg';
import cristina from '../../resources/pexels-christina.jpg';
import { Typography } from '@material-ui/core';



const ArtigoList: ArtigoType[] = [
  {
    title: 'Como ser mais confiante',
    date: 'Nov 12',
    description: 'Não quer mais perder oportunidades por falta de confiança esse artigo é pra você.',
    linkText: 'Image',
    name:'Image',
    image:andrea,
    imageText:'Image Text'
  },
  {
    title: 'O que uma programadora precisa saber para conseguir sua primeira vaaga como DEV',
    date: 'Nov 12',
    description: 'Um dos maiores desafios de um novo programador é conseguir a primeira oportunidade como Desenvolvedor Junior',
    linkText: 'Image',
    name:'Image',
    image:cristina,
    imageText:'Image Text'
  },
  {
    title: 'Como montar seu portifólio',
    date: 'Nov 12',
    description: 'As melhores dicas de como montar o portifólio e diferenciada.',
    linkText: 'Image',
    name:'Image',
    image:dashboard,
    //image:'https://source.unsplash.com/random',
    imageText:'Image Text'
  },
  
 
];


export default function FeaturedArtigos() {

  return (
      <div>
        <CssBaseline />
        <Container maxWidth="lg">
        <main>
          <div style={{display: 'flex', justifyContent: 'center', margin: '30px 0px'}}>
            <Typography variant="caption" className={css(styles.title)}>Aproveite nosso conteúdo para se atualizar</Typography>
          </div>
         
          <MainArtigo/>
          <Grid container spacing={4}>
            {ArtigoList.map((article, i) => (
              <ArtigoItem key={i} article={article} />
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
    fontSize: '24px'
  }
});

