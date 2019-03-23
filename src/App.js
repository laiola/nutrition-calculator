import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter,  Route, Switch } from 'react-router-dom'
import { createStore, combineReducers } from 'redux';

import Calculator from './components/tab/Calculator';
import Menu from './components/tab/Menu';
import Products from './components/tab/Products';
import About from './components/tab/About';
import NotFoundPage from './components/tab/NotFoundPage';
import { characteristicsReducer } from './reducers/CharacterticsReducer';
import { goalRatioReducer } from './reducers/GoalRatioReducer';
import { nutritionReducer } from './reducers/NutritionReducer';

import 'bootswatch/dist/minty/bootstrap.css';

const store = createStore(
  combineReducers({ characteristicsReducer, goalRatioReducer, nutritionReducer})
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/calculator" component={Calculator}/>
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
