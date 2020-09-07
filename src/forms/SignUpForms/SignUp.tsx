import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import DadosGerais from './DadosGerais';
import Button from '@material-ui/core/Button';
import FormacaoForm from './FormacaoForm';

export default function SignUp() {
  const [stepCadastro, setStepCadastro] = React.useState(1);
  //step nivel 1 significa dados gerais e ste nivel 2 formação

  const handleChangNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStepCadastro(2);
  }; 
  const handleChangPrevious = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStepCadastro(1);
  };
  const handleChangeFinalizar = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStepCadastro(1);
  };

  return (
    <div className={css(styles.container)}>
      {
        (stepCadastro === 1 ? 
          
          <div>
            <DadosGerais/>
            <div className={css(styles.next)}>
              <Button
                variant="outlined"
                className={css(styles.button)}
                onClick={handleChangNext}
              >
                Próximo
              </Button>
            </div>
          </div>
          : <div>
              <FormacaoForm/>
                <div className={css(styles.next)}>
                  <Button
                    variant="outlined"
                    className={css(styles.button)}
                    onClick={handleChangPrevious}
                    >
                    Anterior
                  </Button>
                  <Button
  
                    variant="outlined"
                    className={css(styles.button)}
                    onClick={handleChangeFinalizar}
                  >
                    Finalizar
                  </Button>
                </div>

            </div>
          )
      }

    </div>
    
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
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

  }
 
});

