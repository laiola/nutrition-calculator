import React, { Component }  from 'react';

import { Header } from '../header/Header';
import { Characteristics } from '../characteristics/Characteristics';
import { GoalSelector } from '../goal-selector/GoalSelector';
import { NutritionRatioSelector } from '../nutrition-selector/NutritionRatioSelector';
import { NutritionDisplay } from '../nutrition-display/NutritionDisplay';

class Calculator extends Component {
    handleChange = event => {
        this.props.handleCharacteristicsChange(event.target.name, event.target.value);
    };
    
    handleSubmitCharacteristics = event => {
        event.preventDefault();
        this.props.handleSubmitCharacteristics(this.props.characteristics);
    };
    
    // todo fix not updating without reselelct; combine calculator reducers and handle change methods
    handleGoalChange = event => {
        this.props.handleGoalRatioChange(event.target.name, event.target.value);
    };

    handleSubmitGoal = event => {
        event.preventDefault();
        this.props.handleGoalRatioSubmit(this.props.goal.goalRatio, this.props.characteristics.totalIntake);
    };
    
    handleNutritionChange = event => {
        this.props.handleNutritionChange(event.target.name, event.target.value);
    };

    handleSubmitNutritionRatio = event => {
        event.preventDefault();
        const { proteinRatio, fatRatio } = this.props.nutrition;
        const { weight } = this.props.characteristics;
        const { goalIntake } = this.props.goal;
        this.props.handleNutritionSubmit(proteinRatio, fatRatio, weight, goalIntake);
    };

    render() {
        const { totalIntake, sex, activity } = this.props.characteristics || {};
        const { goalIntake } = this.props.goal || {};
        const { protein, fat, carbohydrate, proteinRatio, fatRatio } = this.props.nutrition || {};

        return(
            <div>
                <Header/>
                <Characteristics
                    sex={sex}
                    activity={activity}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmitCharacteristics}
                />
                {
                totalIntake && <GoalSelector
                    handleChange={this.handleGoalChange}
                    handleSubmit={this.handleSubmitGoal}
                    />
                }
                {
                goalIntake && <NutritionRatioSelector
                    proteinRatio={proteinRatio}
                    fatRatio={fatRatio}
                    handleChange={this.handleNutritionChange}
                    handleSubmit={this.handleSubmitNutritionRatio}
                    />
                }
                {
                goalIntake && protein && fat && carbohydrate && <NutritionDisplay
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
