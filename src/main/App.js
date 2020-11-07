
import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBarMain from '../components/NavBarMain';
import Footer from '../components/Footer';
import { HomePage } from '../presentation/pages/home/index';
import Jobs from '../presentation/pages/jobs/featured-job';
import { SignIn } from '../presentation/pages/signin/index';
import { SignUp } from '../presentation/pages/signup/index';
import FeaturedEntrevista from '../presentation/pages/training/featured-interview';
import ScrollIntoView from '../util/ScrollIntoView';
import { FeaturedArticle } from '../presentation/pages/articles';
import FormAgenda from '../presentation/pages/training/interview-form';

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
            <FeaturedArticle/>
          </Route>

          <Route path="/vagas">
            <Jobs/>
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
