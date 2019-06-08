import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form } from 'react-bootstrap';

import { FEMALE, MALE } from '../../constant/Sex';
import { EXTREME_ACTIVITY, HIGH_ACTIVITY, LOW_ACTIVITY, NO_ACTIVITY, NORMAL_ACTIVITY } from '../../constant/Activity';

import './Characteristics.css';

export const Characteristics = ({ handleChange, handleSubmit, characteristics }) => (
    <div className="characteristics">
        <Form onSubmit={handleSubmit}>
            <legend>Step 1. Input your characteristics</legend>
            <Form.Group>
                <Form.Label>Pick your sex:</Form.Label>
                <Form.Control as="select" value={characteristics.sex} onChange={handleChange} name="sex">
                    <option value={MALE}>Male</option>
                    <option value={FEMALE}>Female</option>
                </Form.Control>
            </Form.Group>
            <Form.Row>
                <Col>
                    <Form.Label>Weight (kg):</Form.Label>
                    <Form.Control type="number" step="1" name="weight" value={characteristics.weight}
                                  onChange={handleChange}/>
                </Col>
                <Col>
                    <Form.Label>Height (cm):</Form.Label>
                    <Form.Control type="number" step="1" name="height" value={characteristics.height}
                                  onChange={handleChange}/>
                </Col>
                <Col>
                    <Form.Label>Age (years):</Form.Label>
                    <Form.Control type="number" step="1" name="age" value={characteristics.age}
                                  onChange={handleChange}/>
                </Col>
            </Form.Row>
            <Form.Group>
                <Form.Label>Pick your lifestyle:</Form.Label>
                <Form.Control as="select" value={characteristics.activity} onChange={handleChange} name="activity">
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

Characteristics.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    characteristics: PropTypes.shape({
        sex: PropTypes.oneOf([
            MALE,
            FEMALE
        ]),
        weight: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        height: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        age: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        activity: PropTypes.oneOf([
            NO_ACTIVITY,
            LOW_ACTIVITY,
            NORMAL_ACTIVITY,
            HIGH_ACTIVITY,
            EXTREME_ACTIVITY
        ]),
    }),
};
