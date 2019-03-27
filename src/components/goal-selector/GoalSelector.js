import React from 'react';
import { Button, Form } from 'react-bootstrap';

import './GoalSelector.css';

export const DEFAULT_GOAL_RATIO = 1;
const goals = [
    { key: 0.75, value: 'Lose weight (25%)' },
    { key: 0.80, value: 'Lose weight (20%)' },
    { key: 0.85, value: 'Lose weight (15%)' },
    { key: DEFAULT_GOAL_RATIO, value: 'Keep weight' },
    { key: 1.15, value: 'Gain weight (15%)' },
    { key: 1.20, value: 'Gain weight (20%)' },
    { key: 1.25, value: 'Gain weight (25%)' },
];

export const GoalSelector = props => {
    const { goalRatio, handleChange, handleSubmit } = props;
    return (
        <div className="goal-selector">
            <Form onSubmit={handleSubmit}>
                <legend>Step 2. Goal</legend>
                <Form.Group>
                    <Form.Label>Select your goal:</Form.Label>
                    <Form.Control as="select" value={goalRatio} onChange={handleChange} name="goalRatio">
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
