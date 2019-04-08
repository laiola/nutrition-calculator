import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { combineReducers, createStore } from 'redux';

import { CalculatorContainer } from './components/container/CalculatorContainer';
import { MenuContainer } from './components/container/MenuContainer';
import { ProductsContainer } from './components/container/ProductsContainer';
import { About } from './components/tab/About';
import { NotFoundPage } from './components/tab/NotFoundPage';
import { characteristics } from './reducers/characteristics';
import { nutrition } from './reducers/nutrition';
import { menu } from './reducers/menu';
import { products } from './reducers/products';

import 'bootswatch/dist/minty/bootstrap.css';

const store = createStore(
    combineReducers({ characteristics, nutrition, menu, products })
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={CalculatorContainer}/>
                        <Route path="/calculator" component={CalculatorContainer}/>
                        <Route path="/menu" component={MenuContainer}/>
                        <Route path="/products" component={ProductsContainer}/>
                        <Route path="/about" component={About}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
