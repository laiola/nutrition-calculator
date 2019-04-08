import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardDeck } from 'react-bootstrap';

import './NutritionDisplay.css';

export const NutritionDisplay = ({ intake, protein, fat, carbohydrate }) => (
    <div className="nutrition-display">
        <CardDeck>
            <NutritionCard title="Goal Protein" value={protein}/>
            <NutritionCard title="Goal Fat" value={fat}/>
            <NutritionCard title="Goal Carbohydrate" value={carbohydrate}/>
            <NutritionCard title="Goal Intake" value={intake}/>
        </CardDeck>
    </div>
);

export const NutritionCard = ({ title, value }) => (
    <Card bg="primary" text="white" className="text-center mb-3">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Title as="h4">{value}</Card.Title>
        </Card.Body>
    </Card>
);

NutritionDisplay.propTypes = {
    intake: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrate: PropTypes.number.isRequired,
};

NutritionCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};
