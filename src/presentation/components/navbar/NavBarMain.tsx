import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { ToolbarCustom } from './toolbar'


function NavBarMain ( {username}: { username: String }){

  return(
    <Grid className={css(styles.root)}>
      <AppBar position={"relative"} color={'transparent'} className={css(styles.appBar)}>
        <ToolbarCustom username={username}/>
      </AppBar>
      </Grid>
    );
  }


export default NavBarMain;    
    
const styles = StyleSheet.create({
  root: {
    backgroundColor: '$bg-navbar',
  },
  appBar: {
    backgroundColor: '$bg-navbar',
  }
});

  