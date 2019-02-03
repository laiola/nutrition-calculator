import React, { Component } from "react";
import { Characteristics } from "./components/characteristics/Characteristics";
import { calculateTotalIntake } from "././helper/nutritionCalculator";
import { FEMALE } from "./constant/Sex";
import { NORMAL_ACTIVITY } from "./constant/Activity";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: 0,
      height: 0,
      age: 0,
      sex: FEMALE,
      activity: NORMAL_ACTIVITY
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    alert(calculateTotalIntake(this.state));
  };

  render() {
    return (
      <Characteristics
        sex={this.state.sex}
        activity={this.state.activity}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
