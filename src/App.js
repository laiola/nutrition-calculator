import React, { Component } from "react";
import { Characteristics } from "./components/characteristics/Characteristics";
import { NutitionRatioSelector } from "./components/nutrition-selector/NutitionRatioSelector";
import { calculateTotalIntake, calculateMacronutrient } from "././helper/nutritionCalculator";
import { FEMALE } from "./constant/Sex";
import { NORMAL_ACTIVITY } from "./constant/Activity";
import { ProteinRatio, FatRatio } from "./constant/NutritionRatio";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0,
      height: 0,
      age: 0,
      sex: FEMALE,
      activity: NORMAL_ACTIVITY,
      proteinRatio: ProteinRatio.RECOMMENDED_PROTEIN_RATIO,
      fatRatio: FatRatio.RECOMMENDED_FAT_RATIO
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

  handleSubmitNutritionRatio = event => {
    event.preventDefault();

    const macronutrient = calculateMacronutrient(this.state);
    
    this.setState({
      ...macronutrient
    });
  };

  render() {
    return (
      <div>
        <Characteristics
          sex={this.state.sex}
          activity={this.state.activity}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmitCharacteristics}
        />
        {
          this.state.totalIntake && <NutitionRatioSelector
            proteinRatio={this.state.proteinRatio}
            fatRatio={this.state.fatRatio}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmitNutritionRatio}
          />
        }
      </div>
    );
  }
}

export default App;
