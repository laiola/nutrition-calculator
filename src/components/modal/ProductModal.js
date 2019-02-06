import React, { Component } from 'react';
import { Modal, Form, Col, Button } from 'react-bootstrap';

class ProductModal extends Component {
    static defaultProps = {
        onSubmit: f => f,
    }

    constructor(props) {
        super(props);
        
        this.state = {
            isShowModal: false,
            title: '',
            weight: 0,
            protein: 0,
            fat: 0,
            carbohydrate: 0,
            calorie: 0,
        }
    }

    handleClose = () => {
        this.setState({ isShowModal: false });
    }
    
    handleShow = () => {
        this.setState({ isShowModal: true });
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = () => {
        this.setState({ isShowModal: false });

        const { title, weight, protein, fat, carbohydrate, calorie } = this.state;
        this.props.onSubmit({
            title, weight, protein, fat, carbohydrate, calorie
        });
    }

    render() {
        return(
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Add
                </Button>

                <Modal show={this.state.isShowModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Input your product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProductForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ProductModal;

export const ProductForm = ({ handleSubmit, handleChange }) => {
    return(
        <div className='popup'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Input product title:</Form.Label>
                    <Form.Control type="text" name="title" onChange={handleChange}/>
                    <Form.Label>Weight in gr:</Form.Label>
                    <Form.Control type="number" step="1" name="weight" onChange={handleChange}/>
                </Form.Group>

                <Form.Row>
                    <Col>
                        <Form.Label>Protein per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="protein" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Fat per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="fat" onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>Carbohydrate per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="carbohydrate" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Calorie per 100 gr:</Form.Label>
                        <Form.Control type="number" step="1" name="calorie" onChange={handleChange}/>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    )
}
