import React, { useState} from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuMobile from './MenuMobile';
import  Button  from '@material-ui/core/Button';
import { NavLink, 
  useLocation, 
  // useHistory 
} from "react-router-dom";
import Logotipo from './Logotipo';

function NavBarMain (username: String){

  // useSelector((state:ReduxState) => state.userData.balance);
  //const username: string = "Lora";
  // useSelector((state: ReduxState) => state.userData.name);
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);
  //const dispatch = useDispatch();
  // let history = useHistory();
  let location = useLocation();

  // const handleNavigator = (redirectTo: string) => {
  //   history.push(redirectTo);
  // }

  React.useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);


  return(
    <div className={css(styles.gridContent)}>
      <div className={css(styles.gridItem)}>
        <div>
          <AppBar position='static' className={css(styles.appBar)}>
            <Toolbar>
              
              <div className={ css(styles.sectionDesktop)}>
              {/* Logotipo */}
                <Logotipo/>

                <div className={css(styles.subsectionDesktop)}>
                  <NavLink 
                    to='/treinamento'
                    className={css(styles.navItem, 
                      currentPage === '/treinamento' ? styles.menuActive : styles.menuDisable ) }
                    >Conselho de Amiga</NavLink>


                  <NavLink 
                    to='/artigos'
                    className={css(styles.navItem, 
                      currentPage === '/artigos' ? styles.menuActive : styles.menuDisable) }
                    >Artigos</NavLink>

                  <NavLink 
                    to='/vagas'
                    className={css(styles.navItem, 
                      currentPage === '/vagas' ? styles.menuActive : styles.menuDisable) }
                    >Vagas</NavLink> 

                   { username !== "" ? 
                    <div className={css(styles.contUsername)}>
                      
                      <Typography className={css(styles.username)}>{`Olá, ${username}`}</Typography>
                      <div 
                        className={css(styles.navItem) }
                        onClick={() =>{}}
                      >Sair</div>
                    </div>
                    :
                   
                   <div className={css(styles.contUsername)}>
                      <Button color="secondary">Entrar/Cadastrar</Button>
                  </div>

                  }

                  </div>
                
              </div>

              <div className={css(styles.sectionMobile)}>
                <MenuMobile/>
              <div className={css(styles.title)}>

              {/* Logotipo */}
              <Logotipo/>

            </div>
            
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  </div>
    
    );
    
  }


export default NavBarMain;    
    
const styles = StyleSheet.create({

  title: {
    display: 'flex',
    flex: '1',
  },

  appBar: {
    backgroundColor: 'var(--bg-navbar)',
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
    borderBottom : '3px solid var(--rosa-color)' ,
  },
  menuDisable: {
    borderBottom: 'var(--bg-navbar) solid 3px',
  },
  navItem: {
    float: 'left',
    display: 'block',
    color:'var(--primary-color)',
    textAlign: 'center',
    margin: '0px 10px',
    padding: '0px',
    textDecoration: 'none',
    fontSize: '17px',
    borderBottom: 'transparent solid 3px',
    transition: 'border-bottom 0.15s',

    ':hover': {
      borderBottom: 'var(--rosa-color) solid 3px',
      cursor: 'pointer'
    },
  },
  gridContent:{
    display: 'grid',
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 10,
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
  
});

  