import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import '../../../main/App.css';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormLabel from '@material-ui/core/FormLabel';
import { StyleSheet, css } from 'aphrodite/no-important';
import  Button  from '@material-ui/core/Button';
import cristina2 from './resources/cristina2.jpg';

import { 
   useHistory 
} from "react-router-dom";



function EntrevistaForm () {

  let history = useHistory();

  const [plataforma, setPlataforma] = useState({
    checkedGoogleMeet: false,
    checkedMicrosoftTeams: false,
    checkedSkype: false,
    checkedOutros: false,
  });


  const [dataInicio, setDataInicio] = React.useState<Date | null>(new Date('2020-10-24T21:11:54'));
  const [dataFinal, setDataFinal] =  React.useState<Date | null>(new Date('2020-10-24T21:11:54'));
  const [horarioInicio, setHorarioInicio] =  React.useState<Date | null>(new Date('2020-10-24T10:11:54'));
  const [horarioFinal, setHorarioFinal] =  React.useState<Date | null>(new Date('2020-10-24T19:11:54'));

  // const [selectedDate, setSelectedDate] = React.useState<Date | null>(
  //   new Date('2020-10-24T21:11:54'),
  // );

  const handleDataInicioChange = (date: Date | null) => {
    setDataInicio(date);
  };
  const handleDataFinalChange = (date: Date | null) => {
    setDataFinal(date);
  };
  const handleHorarioInicioChange = (date: Date | null) => {
    setHorarioInicio(date);
  };
  const handleHorarioFinalChange = (date: Date | null) => {
    setHorarioFinal(date);
  };

  const handleSetCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlataforma({ ...plataforma, [event.target.name]: event.target.checked });
  };

  const handleAgendar = () => {
      history.push('/home');
  };

  return (
      <div className={css(styles.container)}>
        {/* Card Roxo */}
        <div className={css(styles.cardContainerImg)} >
        <Typography variant="h5"  gutterBottom style={{textAlign:'center', color:'var(--primary-color)'}}>
          Agende seu conselho de amiga
        </Typography>
          <Paper  elevation={3} className={css(styles.cardPink)}>
            <Paper elevation={5} className={css(styles.cardPurple)}>
              <img src={cristina2} alt='cristina2'  style={{width: '400px', height: '530px'}} />

            </Paper>
          </Paper>

        </div>
        

        {/* Form */}
        <div>
          <Typography variant="h6" gutterBottom style={{ color:'var(--rosa-color)'}}>
            Informe sobre a sua disponibilidade
          </Typography>
          <Grid container spacing={3}>
            
            {/* forms datas */}
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

            {/* datas disponibilidade */}            
              <Grid item xs={12} sm={6}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Estou disponível apartir de"
                  value={dataInicio}
                  onChange={handleDataInicioChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change date',
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="até a data"
                  value={dataFinal}
                  onChange={handleDataFinalChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change date',
                  }}
                />
              </Grid>

              {/* Horario disponibilidade */}
              <Grid item xs={12} sm={6}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Apartir do horário"
                  value={horarioInicio}
                  onChange={handleHorarioInicioChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change time',
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="até o horário"
                  value={horarioFinal}
                  onChange={handleHorarioFinalChange}
                  KeyboardButtonProps={{
                  'aria-label': 'change time',
                  }}
                />
              </Grid>
                
              

            </MuiPickersUtilsProvider>

            {/* <Grid item xs={12}>
              <TextField
              id="outlined-multiline-static"
              fullWidth
              label="Observações"
              rows={4}
              defaultValue=""
              variant="outlined"
            />
            </Grid> */}

            {/* Selecao de plataforma */}
            <Grid item xs={12}>
            <FormLabel component="legend">Selecione quantas plataformas desejar: </FormLabel>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox checked={plataforma.checkedGoogleMeet} onChange={handleSetCheckBox} name="checkedGoogleMeet" />}
                label="Google Meet "
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox checked={plataforma.checkedMicrosoftTeams} onChange={handleSetCheckBox} name="checkedMicrosoftTeams" />}
                label="Microsoft Teams"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox checked={plataforma.checkedSkype} onChange={handleSetCheckBox} name="checkedSkype" />}
                label="Skype"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="city"
                name="city"
                label="Cite outra(s) plataforma(s):"
                fullWidth
                autoComplete="shipping address-level2"
              />

            </Grid>

            <div className={'flex-center'} style={{margin:'20px'}}>
              <Button
                  type="submit"
                  variant="contained"
                   onClick={() => handleAgendar()}
                  //onClick={handleClick}
                  className={css(styles.btn)  }
                >
                 Agendar
              </Button>

              {/* <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                className={css(styles.feedback)}
                open={open}
                // autoHideDuration={6000}
                onClose={handleClose}
                message="Agendado com sucesso, "
                action={
                  <div >
                    <IconButton size="small" aria-label="close"  onClick={handleClose}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </div>
                }
              /> */}
            </div>
      
          </Grid>

        </div>
       
      </div>   
  );

  } 


export default EntrevistaForm;


const styles = StyleSheet.create({
  headingText: {
      fontFamily: 'sans-serif',
      fontSize: 20
  },
  bodyText: {
      fontFamily: 'sans-serif',
      fontSize: 12
  },
  cardPurple: {
    fontFamily: 'sans-serif',
    fontSize: 12,
    flex: 1,
    backgroundColor: 'transparent',
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
      backgroundColor: 'transparent',
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
  container: {
    display: 'inline-flex',
    padding: '60px'
  },

  titleCard:{
    padding: '10px 96px',
    '@media only screen and (max-width: 941px)':{
      padding: '20px 0px',
      fontSize:'32px',
    },

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
  cardContainerImg:{
    padding: '40px',

    '@media only screen and (max-width: 941px)':{
      display: 'none',
    },

  },
  feedback:{
    backgroundColor: 'green'
  }
});