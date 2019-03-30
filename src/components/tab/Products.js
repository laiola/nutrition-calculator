import React, { Component } from 'react';

import { Header } from '../header/Header';
import Table from '../table/Table';

const PRODUCTS_KEY = 'products';

const headers = [
    'Title',
    'Weight',
    'Protein',
    'Fat',
    'Carbohydrate',
    'Calorie',
    'Protein Per 100',
    'Fat Per 100',
    'Carbohydrate Per 100',
    'Calorie Per 100',
];

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        const storedProducts = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];

        this.setState({
            products: storedProducts,
        })
    }

    onSubmit = (productIndex, product) => {
        const newProducts = [...this.state.products];
        if (productIndex || productIndex === 0) {
            newProducts[productIndex] = product;
        } else {
            newProducts.push(product);
        }

        this.setState({
            products: newProducts,
        }, () => localStorage.setItem(PRODUCTS_KEY, JSON.stringify(newProducts)));
    };

    onDelete = productIndex => {
        const newProducts = [...this.state.products];
        newProducts.splice(productIndex, 1);

        this.setState({
            products: newProducts,
        }, () => localStorage.setItem(PRODUCTS_KEY, JSON.stringify(newProducts)));
    };

    render() {
        return (
            <div>
                <Header/>
                <Table
                    headers={headers}
                    rows={this.state.products}
                    onSubmit={this.onSubmit}
                    onDelete={this.onDelete}
                />
            </div>
        )
    }
}

export default Products;
