import React, { Component } from 'react';
import { HashRouter,  Route, Switch } from 'react-router-dom'

import Calculator from './components/tab/Calculator';
import Menu from './components/tab/Menu';
import Products from './components/tab/Products';
import About from './components/tab/About';
import NotFoundPage from './components/tab/NotFoundPage';

import 'bootswatch/dist/minty/bootstrap.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/calculator" component={Calculator}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={About}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
