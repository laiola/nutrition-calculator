import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import ProductModal from '../modal/ProductModal';

import './ProductSelect.css';

const defaultIndex = 0;
const PRODUCTS_KEY = 'products';

class ProductSelect extends Component {
    static defaultProps = {
        onSelect: f => f,
    };

    static propTypes = {
        onSelect: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state = {
            products: [{ id: defaultIndex, title: 'Choose Product' }],
            selectedIndex: defaultIndex,
            isDisplayedProductModal: false,
        }
    }

    componentDidMount() {
        const { products } = this.state;
        const storedProducts = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [];

        this.setState({
            products: [...products, ...storedProducts],
        })
    }

    onAddProduct = () => {
        this.setState({
            isDisplayedProductModal: true
        })
    };

    onAddProductToTable = () => {
        const { selectedIndex, products } = this.state;
        if (selectedIndex !== defaultIndex) {
            this.props.onSelect(products[selectedIndex]);
        }
    };

    onClose = () => {
        this.setState({
            isDisplayedProductModal: false
        })
    };

    onSubmit = product => {
        const newProducts = [...this.state.products, product];

        this.setState({
            products: newProducts,
        }, () => localStorage.setItem(PRODUCTS_KEY, JSON.stringify(newProducts.slice(1))));
    };

    onChange = event => {
        event.preventDefault();
        this.setState({
            selectedIndex: +event.target.value
        });
    };

    render() {
        const { isDisplayedProductModal, products, selectedIndex } = this.state;
        return (
            <div className="product-select">
                {
                    isDisplayedProductModal
                    && <ProductModal onSubmit={this.onSubmit}
                                     onClose={this.onClose}
                                     isDisplayedProductModal={isDisplayedProductModal}/>
                }
                <Form className="product-select-form">
                    <Form.Group>
                        <Form.Label htmlFor="product-select" className="lead">Select a product:</Form.Label>
                        <Form.Control as="select" className="product-select"
                                      id="product-select"
                                      onChange={this.onChange}
                                      value={selectedIndex}
                                      title={products[selectedIndex].title}>
                            {
                                products.map((product, id) =>
                                    <option key={`${id}-${product.title}`} value={id}>
                                        {product.title}
                                    </option>
                                )
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <button className="btn btn-secondary" type="button" onClick={this.onAddProduct}>Add Product
                        </button>
                        <button className="btn btn-primary" type="button" onClick={this.onAddProductToTable}>Add To
                            Table
                        </button>
                    </Form.Group>
                </Form>
            </div>
        );
    };
}

export default ProductSelect;
