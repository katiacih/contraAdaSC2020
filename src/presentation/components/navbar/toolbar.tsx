import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Toolbar from '@material-ui/core/Toolbar';
import  Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuMobile from '../MenuMobile';
import { NavLink, 
  useLocation, 
   useHistory 
} from "react-router-dom";
import Logotipo from './Logotipo';

export function ToolbarCustom ( {username}: { username: String }){

  const [currentPage, setCurrentPage] = useState(useLocation().pathname);

  let history = useHistory();
  let location = useLocation();

  React.useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const handleNavigator = (redirectTo: string) => {
    setCurrentPage(redirectTo)
    history.push(redirectTo);
  }

  return(
  <Toolbar className={css(styles.toolbar)}>     
    {/* Inicio Section Web */}
    <div className={ css(styles.sectionDesktop)}>
      <Logotipo/>
      <div className={css(styles.subsectionDesktop)}>
        <NavLink 
          to='/agendar'
          className={css(styles.navItem, 
            currentPage === '/agendar' ? styles.menuActive : styles.menuDisable ) }
          >Conselho de Amiga</NavLink>

        <NavLink 
          to='/artigo'
          className={css(styles.navItem, 
            currentPage === '/artigos' ? styles.menuActive : styles.menuDisable) }
          >Artigos</NavLink>

        <NavLink 
          to='/vagas'
          className={css(styles.navItem, 
            currentPage === '/vagas' ? styles.menuActive : styles.menuDisable) }
          >Vagas</NavLink> 
          
      {/* Button cadastrar/login */}
            {
            ( username !== '' && username !== null )  ? 
            <div className={css(styles.contUsername)}>
              <Typography className={css(styles.username)}>{`Olá, ${username}`}</Typography>
              <div 
                className={css(styles.navItem) }
                
              >Sair</div>
            </div>
            :
            
            <div className={css(styles.contUsername)}>
              <Button   
                className={css(styles.textButton)} 
                variant='contained'
                onClick={ () => handleNavigator('entrar')}
                color="secondary">Entrar/Cadastrar</Button>
          </div>
          }
      </div>
    </div>
    {/* Fim section web */}

    {/* Inicio Section mobile */}
    <div className={css(styles.sectionMobile)}>
      <MenuMobile/>
      <div className={css(styles.title)}>
        <Logotipo/>
      </div>
    </div>
    {/* Fim Section mobile */}

  </Toolbar>
    );
    
  }   
    
const styles = StyleSheet.create({

  title: {
    display: 'flex',
    flex: '1',
  },
  toolbar: {
    alignItems: 'flex-start'
  },
  contUsername: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '20px'
  },
  username:{
    color: 'var(--rosa-color)',
    width: '120px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  menuActive: {
    borderBottom : '3px solid $pink-color' ,
  },
  menuDisable: {
    borderBottom: '$bg-navbar solid 3px',
  },
  navItem: {
    float: 'left',
    display: 'block',
    color:'var(--primary-color)',
    textAlign: 'center',
    margin: '0px 10px',
    padding: '0px',
    textDecoration: 'none',
    fontSize: '13px',
    borderBottom: 'transparent solid 3px',
    transition: 'border-bottom 0.15s',

    ':hover': {
      borderBottom: 'var(--rosa-color) solid 3px',
      cursor: 'pointer'
    },
  },
  gridContent:{
    display: 'grid',
    // position: 'fixed',
    // top: 0, left: 0, right: 0,
    // zIndex: 10,
    backgroundColor: 'var(--primary-color-dark)',
    minHeight: '56px',
  },
  gridItem: {
    gridTemplateColumns: '1fr 2fr 1fr 1fr'
  },
  iconAccountUser:{
    margin: '0px 0px 0px 10px',
    color: 'var(--main-bg-color-white)',
    width: '24px',
    height: '24px'

  },
  labelPontos:{
    color: 'var(--secondary-color)',
    borderColor: 'var(--secondary-color)',
    margin: '0px 10px 0px 10px'
  },
  sectionDesktop: {
    display: 'none',

    '@media only screen and (min-width: 900px)':{
      display: 'flex',
      padding: '10px 0px',
      width: '100%',
      alignItems:'center',
      justifyContent: 'space-between',
    }
  },
  subsectionDesktop:{
    display: 'none',

    '@media only screen and (min-width: 900px)':{
      display: 'flex',
      alignItems:'center',
      justifyContent: 'space-between',
    }
  },
  sectionMobile: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '100%',

    '@media only screen and (min-width: 900px)':{
      display: 'none',
    }
  },
  textButton: {
    textTransform: 'none'
  }
  
});

  