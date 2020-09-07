import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBarMain from './components/NavBarMain';
import Footer from './components/Footer';
import HomePage from './contents/HomePage';
import Vagas from './contents/Vagas/FeaturedVagas';
import SignIn  from './forms/SignIn';
import SignUp from './forms/SignUpForms/SignUp';
import FeaturedEntrevista from './contents/Treinamento/FeaturedEntrevista';
import ScrollIntoView from './util/ScrollIntoView';
import FeaturedArtigos from './contents/Artigos/FeaturedArtigos';
import FormAgenda from './contents/Treinamento/EntrevistaForm';

const username = ''

function App() {
  return (
    <div className="App">
        <Router>
          <NavBarMain username={username}/>

          <div id="app-content">
          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route exact path="/home">
            <HomePage/>
          </Route>
          <Route  path="/entrar">
            <SignIn/>
          </Route>

          <Route exact path="/cadastro">
            <SignUp/>
          </Route>

          <Route path="/treinamento" component={ScrollIntoView(FeaturedEntrevista)}/>

          <Route path="/artigo">
            <FeaturedArtigos/>
          </Route>

          <Route path="/vagas">
            <Vagas/>
          </Route>

          <Route path="/agendar">
            <FormAgenda/>
          </Route>

          </div>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
