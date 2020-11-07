import React, {useState}  from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import DadosGerais from './dados-gerais';
import Button from '@material-ui/core/Button';
import FormacaoForm from './formacao-form';
import { Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import {
  useHistory 
} from "react-router-dom";


export default function SignUp() {

  const [open, setOpen] = useState(false);

  let history = useHistory();

  const handleClick = () => {
    setOpen(true);
    history.push('/');
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={css(styles.container)}>
        <Typography variant='h3' style={{textAlign:'center', color:'var(--rosa-color)'}}>Bem vinda</Typography>
        <Typography variant='subtitle1' style={{textAlign:'center', color:'var(--primary-color)'}}>Receba as últimas novidades sobre vagas, além de receber os melhores conselhos de amiga e conseguir o emprego dos sonhos.</Typography>
        <div style={{marginTop: '100px'}}></div>
        <DadosGerais/>
        <div style={{marginTop: '100px'}}></div>
        <FormacaoForm/>
        <div className={'flex-center'} style={{margin:'20px'}}>
          <Button
              type="submit"
              variant="contained"
              onClick={() => handleClick()}
              className={css(styles.submit)  }
            >
              Cadastrar
          </Button>
        </div>

        <Snackbar 
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open} 
          autoHideDuration={6000} 
          message='Cadastro realizado com sucesso.'
          onClose={handleClose}
        />
    </div>
    
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    padding: '100px',
    fontFamily: 'Arial',
  },
  button: {
    margin: '10px',
    Border: '1px solid var(--secondary-color)',
    backgroundColor: 'var(--secondary-color)',
    color:'var(--text-primary-color)',

    ':hover': {
      backgroundColor: 'var(--secondary-color-dark)',
    }
  },

  next: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'

  },
  submit: {
    margin: '10px 0 30px',
    Border: '1px solid var(--secondary-color)',
    backgroundColor: 'var(--secondary-color)',
    color:'var(--text-primary-color)',

    ':hover': {
      backgroundColor: 'var(--secondary-color-dark)',
    }
  },

 
});

