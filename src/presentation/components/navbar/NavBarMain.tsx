import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { ToolbarCustom } from './toolbar'

function NavBarMain ( {username}: { username: String }){

  return(
    <Grid>
      <AppBar position={"relative"} className={css(styles.appBar)}>
        <ToolbarCustom username={username}/>
      </AppBar>
      </Grid>
    );
  }


export default NavBarMain;    
    
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '$pink-color !important',
  }
});

  