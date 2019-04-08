import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { FatRatio, ProteinRatio } from '../../constant/NutritionRatio';

import './NutritionRatioSelector.css';

export const NutritionRatioSelector = ({ handleSubmit, handleChange, proteinRatio, fatRatio }) => (
    <div className="nutrition-ratio-selector">
        <Form onSubmit={handleSubmit}>
            <legend>Step 3. Choose your nutrition ratio</legend>
            <Form.Group>
                <Form.Label>Pick protein weight per kilogram of your weight:</Form.Label>
                <Form.Control as="select" value={proteinRatio} onChange={handleChange}
                              name="proteinRatio">
                    {
                        Object.values(ProteinRatio).map((value, i) =>
                            <option key={i} value={value}>{value}</option>
                        )
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Pick fat weight per kilogram of your weight:</Form.Label>
                <Form.Control as="select" value={fatRatio} onChange={handleChange} name="fatRatio">
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

NutritionRatioSelector.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    proteinRatio: PropTypes.number.isRequired,
    fatRatio: PropTypes.number.isRequired,
};
