import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NavBarMain from './components/NavBarMain';
import Footer from './components/Footer';
import HomePage from './contents/HomePage';
import EntrevistaForm from './contents/EntrevistaForm';
import Vagas from './contents/Vagas';
function App() {
  return (
    <div className="App">
        <Router>
          <NavBarMain />

          <div id="app-content">
          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route exact path="/home">
            <HomePage/>
          </Route>

          <Route exact path="/treinamento">
            <EntrevistaForm/>
          </Route>

          <Route exact path="/artigo">
            <EntrevistaForm/>
          </Route>

          <Route exact path="/entrevista">
            <EntrevistaForm/>
          </Route>

          <Route exact path="/Vagas">
            <Vagas/>
          </Route>

          </div>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
