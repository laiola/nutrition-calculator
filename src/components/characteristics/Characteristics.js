import React, { Component } from 'react';
import { calculateTotalIntake } from '../../helper/nutritionCalculator';
import { MALE, FEMALE } from '../../constant/Sex';
import { NORMAL_ACTIVITY, NO_ACTIVITY, LOW_ACTIVITY, HIGH_ACTIVITY, EXTREME_ACTIVITY } from '../../constant/Activity';

class Characteristics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: 0,
            height: 0,
            age: 0,
            sex: FEMALE,
            activity: NORMAL_ACTIVITY,
        }
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
            <div className="characteristics">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your sex:
                        <select value={this.state.sex} onChange={this.handleChange} name="sex">
                            <option value={MALE}>Male</option>
                            <option value={FEMALE}>Female</option>
                        </select>
                    </label>
                    <div>
                        <label>
                            Weight in kg:
                            <input type="number" step="1" name="weight" 
                                value={this.state.weight} onChange={this.handleChange} />
                        </label>
                        <label>
                            Height in cm:
                            <input type="number" step="1" name="height" 
                                value={this.state.height} onChange={this.handleChange} />
                        </label>
                        <label>
                            Age in years:
                            <input type="number" step="1" name="age" 
                                value={this.state.age} onChange={this.handleChange} />
                        </label>
                    </div>
                    <label>
                        Pick your lifestyle:
                        <select value={this.state.activity} onChange={this.handleChange} name="activity">
                            <option value={NO_ACTIVITY}>No activity</option>
                            <option value={LOW_ACTIVITY}>Low activity</option>
                            <option value={NORMAL_ACTIVITY}>Normal activity</option>
                            <option value={HIGH_ACTIVITY}>High activity</option>
                            <option value={EXTREME_ACTIVITY}>Extreme activity</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Characteristics;
