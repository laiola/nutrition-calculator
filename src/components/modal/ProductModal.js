import React, { Component } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { calculateNutritionByWeight } from '../../helper/nutritionCalculator';

const initialProduct = {
    title: '',
    weight: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    calorie: 0,
    proteinPer: 0,
    fatPer: 0,
    carbohydratePer: 0,
    caloriePer: 0,
};

class ProductModal extends Component {
    static defaultProps = {
        onSubmit: f => f,
        onClose: f => f,
        isDisplayedProductModal: false,
    };

    constructor(props) {
        super(props);

        this.state = { ...initialProduct };
    }

    componentDidMount() {
        const { product } = this.props;

        if (product) {
            this.setState({
                ...product
            });
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = () => {
        const { onSubmit, onClose } = this.props;
        onSubmit(calculateNutritionByWeight(this.state));
        onClose();
    };

    render() {
        const { isDisplayedProductModal, onClose } = this.props;
        const product = { ...this.state };

        return (
            <Modal show={isDisplayedProductModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Input your product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} product={product}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ProductModal;

export const ProductForm = ({ handleSubmit, handleChange, product }) => {
    const { title, weight, proteinPer, fatPer, carbohydratePer, caloriePer } = product;
    return (
        <div className='popup'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Input product title:</Form.Label>
                    <Form.Control type="text" name="title" value={title} onChange={handleChange}/>
                    <Form.Label>Weight in gr:</Form.Label>
                    <Form.Control type="number" step="1" name="weight" value={weight} onChange={handleChange}/>
                </Form.Group>

                <Form.Row>
                    <Col>
                        <Form.Label>Protein per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="proteinPer" value={proteinPer}
                                      onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Fat per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="fatPer" value={fatPer} onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Carbohydrate per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="carbohydratePer" value={carbohydratePer}
                                      onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Calorie per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="caloriePer" value={caloriePer}
                                      onChange={handleChange}/>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
};
