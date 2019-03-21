import React, { Component } from 'react';
import { Form, Row, Col } from "react-bootstrap";

import ProductModal from '../modal/ProductModal';

import './ProductSelect.css';

const defaultIndex = 0;

class ProductSelect extends Component {
    static defaultProps = {
        onSelect: f => f,
    }

    constructor(props) {
        super(props);
        this.state = {
            products: [{id: defaultIndex, title: 'Choose Product'}],
            selectedIndex: defaultIndex,
            isDisplayedProductModal: false,
        }
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
    }

    onSubmit = product => {
        const newProducts = [...this.state.products, product];

        this.setState({
            products: newProducts,
        })
    }

    onChange = event => {
        event.preventDefault();
        this.setState({
            selectedIndex: event.target.value
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
                        <button className="btn btn-secondary" type="button" onClick={this.onAddProduct}>Add Product</button>
                        <button className="btn btn-primary" type="button" onClick={this.onAddProductToTable}>Add To Table</button>
                    </Form.Group>
                </Form>
            </div>
        );
    };
}

export default ProductSelect;

/*
<Form.Group>
                        <Col>
                            <Form.Label htmlFor="product-select" className="lead">Select a product:</Form.Label>
                        </Col>
                        <Col>
                            <button className="btn btn-secondary" type="button" onClick={this.onAddProduct}>Add Product</button>
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Col>
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
                        </Col>
                        <Col>
                            <button className="btn btn-primary" type="button" onClick={this.onAddProductToTable}>Add To Table</button>
                        </Col>
                    </Form.Row>
*/