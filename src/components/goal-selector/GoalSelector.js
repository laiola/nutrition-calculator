import React from 'react';
import { Form, Button } from "react-bootstrap";

import './GoalSelector.css';

const goals = [
    {key: 0.75, value: 'Lose weight (25%)'},
    {key: 0.80, value: 'Lose weight (20%)'},
    {key: 0.85, value: 'Lose weight (15%)'},
    {key: 1, value: 'Keep weight'},
    {key: 1.15, value: 'Gain weight (15%)'},
    {key: 1.20, value: 'Gain weight (20%)'},
    {key: 1.25, value: 'Gain weight (25%)'},
];

export const GoalSelector = props => {
    return (
        <div className="goal-selector">
            <Form onSubmit={props.handleSubmit}>
                <legend>Step 2. Goal</legend>
                <Form.Group>
                    <Form.Label>Select your goal:</Form.Label>
                    <Form.Control as="select" onChange={props.handleChange} name="goal">
                        {
                            goals.map((value, i) => 
                                <option key={i} value={value.key}>{value.value}</option>
                            )
                        }
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
