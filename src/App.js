import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBarMain from './components/NavBarMain';
import Footer from './components/Footer';
import HomePage from './contents/HomePage';
import EntrevistaForm from './contents/EntrevistaForm';
import Vagas from './contents/Vagas/FeaturedVagas';
const username = 'Rose'
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
