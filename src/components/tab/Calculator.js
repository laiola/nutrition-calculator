import React, { Component }  from 'react';

import { Header } from '../header/Header';
import { FEMALE } from '../../constant/Sex';
import { NORMAL_ACTIVITY } from '../../constant/Activity';
import { ProteinRatio, FatRatio } from '../../constant/NutritionRatio';
import { calculateTotalIntake, calculateMacronutrient } from '../../helper/nutritionCalculator';
import { Characteristics } from '../characteristics/Characteristics';
import { GoalSelector, DEFAULT_GOAL_RATIO } from '../goal-selector/GoalSelector';
import { NutritionRatioSelector } from '../nutrition-selector/NutritionRatioSelector';
import { NutritionDisplay } from '../nutrition-display/NutritionDisplay';

class Calculator extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          weight: 0,
          height: 0,
          age: 0,
          sex: FEMALE,
          activity: NORMAL_ACTIVITY,
          goal: DEFAULT_GOAL_RATIO,
          proteinRatio: ProteinRatio.RECOMMENDED_PROTEIN_RATIO,
          fatRatio: FatRatio.RECOMMENDED_FAT_RATIO,
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    handleSubmitCharacteristics = event => {
        event.preventDefault();
    
        this.setState({
            totalIntake: calculateTotalIntake(this.state)
        });
    };
    
    handleSubmitGoal = event => {
        event.preventDefault();
    
        const { totalIntake, goal } = this.state;
    
        this.setState({
            goalIntake: Math.round(totalIntake * goal)
        });
    };
    
    handleSubmitNutritionRatio = event => {
        event.preventDefault();
    
        const macronutrient = calculateMacronutrient(this.state);
        
        this.setState({
            ...macronutrient
        });
    };

    render() {
        const { totalIntake, goalIntake, protein, fat, carbohydrate } = this.state;

        return(
            <div>
                <Header/>
                <Characteristics
                    sex={this.state.sex}
                    activity={this.state.activity}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmitCharacteristics}
                />
                {
                totalIntake && <GoalSelector
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmitGoal}
                    />
                }
                {
                goalIntake && <NutritionRatioSelector
                    proteinRatio={this.state.proteinRatio}
                    fatRatio={this.state.fatRatio}
                    handleChange={this.handleChange}
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
