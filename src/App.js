import React, { Component } from 'react';
import { HashRouter,  Route, Switch } from 'react-router-dom'

import TempTable from './components/table/TempTable';
import Calculator from './components/tab/Calculator';
import Menu from './components/tab/Menu';
import Products from './components/tab/Products';
import About from './components/tab/About';
import NotFoundPage from './components/tab/NotFoundPage';
import { Characteristics } from './components/characteristics/Characteristics';
import { calculateTotalIntake, calculateMacronutrient } from '././helper/nutritionCalculator';
import { FEMALE } from './constant/Sex';
import { NORMAL_ACTIVITY } from './constant/Activity';
import { ProteinRatio, FatRatio } from './constant/NutritionRatio';
import { GoalSelector } from './components/goal-selector/GoalSelector';
import { NutritionRatioSelector } from './components/nutrition-selector/NutritionRatioSelector';
import { NutritionDisplay } from './components/nutrition-display/NutritionDisplay';

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
      <HashRouter>
        <Switch>
          <Route path="/calculator" component={Calculator}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/products" component={Products}/>
          <Route path="/about" component={About}/>
          <Route component={NotFoundPage}/>
        </Switch>

        <div>
            {/* <Characteristics
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
            } */}
            {
              goalIntake && protein && fat && carbohydrate && <TempTable
                goalIntake={goalIntake}
                goalProtein={protein}
                goalFat={fat}
                goalCarbohydrate={carbohydrate}/>
            }
          </div>
      </HashRouter>
    );
  }
}

export default App;
