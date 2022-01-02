import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from "react-router-dom";
//import { logout } from '../../datastore/thunk-actions';
//import { useDispatch } from 'react-redux';

function MenuMobile(){
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 // const dispatch = useDispatch();

  let history = useHistory();

  /***HANDLE */
  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {

    setIsOpenMenu(true);
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setIsOpenMenu(false);
    setAnchorEl(null);
  }

  const handleNavigator = (redirectTo : string) => {
    history.push(redirectTo);
    setIsOpenMenu(false);
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton
        edge='start' 
        className={css(styles.menuButton)}
        color="inherit"
        aria-label="open drawer"
        onClick={handleOpen}>
        <MenuIcon/>
      </IconButton>

      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(isOpenMenu)}
        onClose={handleClose}
      >
        <MenuItem className={css(styles.menuItem)} 
          onClick={() => handleNavigator('/treinamento')}>Conselhor de amiga</MenuItem>
        <MenuItem className={css(styles.menuItem)} 
          onClick={() => handleNavigator('/solicitacoes')}>Artigos</MenuItem>
        <MenuItem className={css(styles.menuItem)} 
          onClick={() => handleNavigator('/premios')}>Vagas</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuMobile;

const styles = StyleSheet.create({
  menuItem: {
    color: 'var(--primary-color)',
    ':hover': {
      color: 'var(--text-primary-color)',
      backgroundColor: 'var(--primary-color)',
    },
    ':active': {
      color: 'var(--text-primary-color)',
      backgroundColor: 'var(--primary-color)',
    },
  },
  menuButton: {
    marginRight: '8px',
  },
});
