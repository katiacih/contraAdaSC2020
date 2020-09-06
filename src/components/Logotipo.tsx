import React, { useState} from 'react';
import { StyleSheet, css } from 'aphrodite';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";
// import { SvgIcon } from '@material-ui/core';
// import {ReactComponent as Logo} from './logosvg.svg';
import logo from './android-chrome-192x192.png';


function Logotipo () {
  let history = useHistory();

  const GoToHome = () => {
    history.push('/home');
  }
  return(
    <div style={{display: 'flex', alignItems: 'center' }} 
      onClick={() => GoToHome()} >
        <img style={{
          width: '50px', 
          height: '50px'}}
          src={logo} alt="ContraAda"/>
      
       {/* <SvgIcon viewBox="0 0 650 700">
         <Logo/>
       </SvgIcon> */}
      <Typography   
        className={css(styles.contrat)}
        variant='h4'
        noWrap>Contrat</Typography>
      <Typography   
        className={css(styles.Ada)}
        variant='h4'
        noWrap>Ada</Typography>
    </div>
  );
  
  
  
}

export default Logotipo;    
    
const styles = StyleSheet.create({

  contrat: {
    color: 'var(--primary-color)',
  },
  Ada:{
    color: 'var(--rosa-color)',
  },

  title: {
    display: 'flex',
    flex: '1',
  },

});
