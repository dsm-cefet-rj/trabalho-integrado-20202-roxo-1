import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import TelaCadastro from './TelaCadastro';
import TelaLigacao from './TelaLigacao';
//import Menu from './menu';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (<div>
      <Header />
        <Router>
          <section>
              <menu>
                <Link to="/busca">Busca</Link>
              </menu>
              <menu>
                <Link to="/cadastro">Cadastro</Link> 
              </menu>         
              <menu>
                <Link to="/historico">Meu Histórico</Link>
              </menu>
              <menu>
                <Link to="/login">Login</Link>
              </menu>
          </section>

          <Switch>
            <Route exact path="/busca">
              {/* modelo de paths */}
            </Route>

            <Route exact path="/cadastro">
              <TelaCadastro />
            </Route>

            <Route exact path="/historico">
              {/* modelo de paths */}
            </Route>

            <Route exact path="/login">
              {/* modelo de paths */}
            </Route>
          </Switch>
        </Router>
        <TelaLigacao />
      <Footer />
    </div>
  );
}

export default App;