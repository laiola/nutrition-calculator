import React, { Component } from "react";
import { Characteristics } from "./components/characteristics/Characteristics";
import { calculateTotalIntake, calculateMacronutrient } from "././helper/nutritionCalculator";
import { FEMALE } from "./constant/Sex";
import { NORMAL_ACTIVITY } from "./constant/Activity";
import { ProteinRatio, FatRatio } from "./constant/NutritionRatio";
import { GoalSelector } from "./components/goal-selector/GoalSelector";
import { NutritionRatioSelector } from "./components/nutrition-selector/NutritionRatioSelector";
import { NutritionDisplay } from "./components/nutrition-display/NutritionDisplay";
import { Header } from "./components/header/Header";

import 'bootswatch/dist/minty/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0,
      height: 0,
      age: 0,
      sex: FEMALE,
      activity: NORMAL_ACTIVITY,
      goal: 0.75,
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

    return (
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
    );
  }
}

export default App;
