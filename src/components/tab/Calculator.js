import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/Header';
import { Characteristics } from '../characteristics/Characteristics';
import { GoalSelector } from '../goal-selector/GoalSelector';
import { NutritionRatioSelector } from '../nutrition-selector/NutritionRatioSelector';
import { NutritionDisplay } from '../nutrition-display/NutritionDisplay';

class Calculator extends Component {
    static propTypes = {
        handleCharacteristicsChange: PropTypes.func.isRequired,
        handleSubmitCharacteristics: PropTypes.func.isRequired,
        handleGoalRatioSubmit: PropTypes.func.isRequired,
        handleNutritionSubmit: PropTypes.func.isRequired,
        nutrition: PropTypes.shape({
            protein: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            carbohydrate: PropTypes.number.isRequired,
            goalIntake: PropTypes.number.isRequired
        }),
        characteristics: PropTypes.object.isRequired,
    };

    handleChange = event => {
        this.props.handleCharacteristicsChange(event.target.name, event.target.value);
    };

    handleSubmitCharacteristics = event => {
        event.preventDefault();
        this.props.handleSubmitCharacteristics();
    };

    handleSubmitGoal = event => {
        event.preventDefault();
        const { goalRatio, totalIntake } = this.props.characteristics;
        this.props.handleGoalRatioSubmit(goalRatio, totalIntake);
    };

    handleSubmitNutritionRatio = event => {
        event.preventDefault();
        const { weight, proteinRatio, fatRatio } = this.props.characteristics;
        this.props.handleNutritionSubmit(proteinRatio, fatRatio, weight);
    };

    render() {
        const { goalRatio, proteinRatio, fatRatio, totalIntake } = this.props.characteristics;
        const { protein, fat, carbohydrate, goalIntake } = this.props.nutrition;

        return (
            <div>
                <Header/>
                <Characteristics
                    characteristics={this.props.characteristics}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmitCharacteristics}
                />
                {
                    !!totalIntake && <GoalSelector
                        goalRatio={goalRatio}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmitGoal}
                    />
                }
                {
                    !!goalIntake && <NutritionRatioSelector
                        proteinRatio={proteinRatio}
                        fatRatio={fatRatio}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmitNutritionRatio}
                    />
                }
                {
                    !!goalIntake && !!protein && !!fat && !!carbohydrate && <NutritionDisplay
                        intake={goalIntake}
                        protein={protein}
                        fat={fat}
                        carbohydrate={carbohydrate}
                    />
                }
            </div>
        )
    }
}

export default Calculator;
