import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter,  Route, Switch } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';

import { CalculatorContainer } from './components/container/CalculatorContainer';
import Menu from './components/tab/Menu';
import Products from './components/tab/Products';
import About from './components/tab/About';
import NotFoundPage from './components/tab/NotFoundPage';
import { characteristics } from './reducers/characteristics';
import { goal } from './reducers/goal';
import { nutrition } from './reducers/nutrition';

import 'bootswatch/dist/minty/bootstrap.css';

const store = createStore(
  combineReducers({ characteristics, goal, nutrition})
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/calculator" component={CalculatorContainer}/>
            <Route path="/menu" component={Menu}/>
            <Route path="/products" component={Products}/>
            <Route path="/about" component={About}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
