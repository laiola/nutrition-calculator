import React from 'react';
import { Form, Col, Button } from "react-bootstrap";

import { MALE, FEMALE } from '../../constant/Sex';
import { NORMAL_ACTIVITY, NO_ACTIVITY, LOW_ACTIVITY, HIGH_ACTIVITY, EXTREME_ACTIVITY } from '../../constant/Activity';

import './Characteristics.css';

export const Characteristics = props => {
    const { handleChange } = props;
    
    return (
        <div className="characteristics">
            <Form onSubmit={props.handleSubmit}>
                <legend>Step 1. Input your characteristics</legend>
                <Form.Group>
                    <Form.Label>Pick your sex:</Form.Label>
                    <Form.Control as="select" value={props.sex} onChange={handleChange} name="sex">
                        <option value={MALE}>Male</option>
                        <option value={FEMALE}>Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Label>Weight in kg:</Form.Label>
                        <Form.Control type="number" step="1" name="weight" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Height in kg:</Form.Label>
                        <Form.Control type="number" step="1" name="height" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Form.Label>Age in years:</Form.Label>
                        <Form.Control type="number" step="1" name="age" onChange={handleChange}/>
                    </Col>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Pick your lifestyle:</Form.Label>
                    <Form.Control as="select" value={props.activity} onChange={handleChange} name="activity">
                        <option value={NO_ACTIVITY}>No activity</option>
                        <option value={LOW_ACTIVITY}>Low activity</option>
                        <option value={NORMAL_ACTIVITY}>Normal activity</option>
                        <option value={HIGH_ACTIVITY}>High activity</option>
                        <option value={EXTREME_ACTIVITY}>Extreme activity</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
