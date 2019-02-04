import React from 'react';
import { Form, Button } from "react-bootstrap";

import { ProteinRatio, FatRatio} from '../../constant/NutritionRatio';

import './NutritionRatioSelector.css';

export const NutritionRatioSelector = props => {
    return (
        <div className="nutrition-ratio-selector">
            <Form onSubmit={props.handleSubmit}>
                <legend>Step 3. Choose your nutrition ratio</legend>
                <Form.Group>
                    <Form.Label>Pick protein weight per kilogram of your weight:</Form.Label>
                    <Form.Control as="select" onChange={props.handleChange} name="proteinRatio">
                        {
                            Object.values(ProteinRatio).map((value, i) => 
                                <option key={i} value={value}>{value}</option>
                            )
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pick fat weight per kilogram of your weight:</Form.Label>
                    <Form.Control as="select" onChange={props.handleChange} name="fatRatio">
                        {
                            Object.values(FatRatio).map((value, i) => 
                                <option key={i} value={value}>{value}</option>
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
