import React from 'react';
import Button from '@material-ui/core/Button';
import { StyleSheet, css } from 'aphrodite/no-important';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from './android-chrome-192x192.png';
import {
   useHistory 
} from "react-router-dom";
import '../../../main/App.css';



export default function SignIn() {

  let history = useHistory();
  
  const handleNavigator = (redirectTo: string) => {
    history.push(redirectTo);
  }


  return (
    <Container component="main" maxWidth="xs">
      <div className={css(styles.paper)}>
        {/* <Avatar className={css(styles.avatar)}>
          <LockOutlinedIcon />
        </Avatar> */}
        <img style={{
          width: '50px', 
          height: '50px'}}
          src={logo} alt="ContraAda"/>
        <Typography component="h1" variant="h5">
          Cadastre-se para começar
        </Typography>
        <form className={css(styles.form)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" style={{color: 'var(--secondary-color)'}} />}
            label="Lembrar-me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            onClick = { () => handleNavigator('home')}
            className={css(styles.submit)}
          >
            Cadastrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" 
                onClick = { () => handleNavigator('cadastro')}
                variant="body2">
                {"Não possui uma conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const styles = StyleSheet.create({

  paper: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '10px',
    backgroundColor: 'var(--secondary-color)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '10px',
    
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
