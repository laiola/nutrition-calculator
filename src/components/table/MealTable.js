import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EatingContainer from '../container/EatingContainer';

import './MealTable.css';

// TODO IS NOT USING
const headers = ['Title', 'Weight', 'P', 'F', 'C', 'Calorie', 'Edit Nutrition'];
const initialEatingContainer = {
    protein: 0,
    fat : 0,
    carbohydrate: 0,
    calorie: 0
};

const initialEatingContainers = [
    {key: 'Breakfast', value: {...initialEatingContainer}},
    {key: 'Lunch', value: {...initialEatingContainer}},
    {key: 'Snack', value: {...initialEatingContainer}},
    {key: 'Dinner', value: {...initialEatingContainer}},
];

class MealTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eatingContainers : initialEatingContainers,
        };
    };

    onRemoveEatingContainer = title => {
        this.setState({
            eatingContainers : this.state.eatingContainers.filter(el => el.key !== title)
        });
    };

    onChangeEatingContainer = (title, nutritions) => {
        const eatingContainersCopy = [...this.state.eatingContainers];
        const currentContainerIndex = eatingContainersCopy.findIndex(container => container.key === title);
        const currentContainer = eatingContainersCopy[currentContainerIndex];
        const currentNutrition = currentContainer.value;

        currentNutrition.protein += nutritions[0];
        currentNutrition.fat += nutritions[1];
        currentNutrition.carbohydrate += nutritions[2];
        currentNutrition.calorie += nutritions[3];

        const reducer = (accumulator, currentValue) => {
            const nutrition = currentValue.value;

            accumulator.protein += nutrition.protein;
            accumulator.fat += nutrition.fat;
            accumulator.carbohydrate += nutrition.carbohydrate;
            accumulator.calorie += nutrition.calorie;

            return accumulator;
        };

        this.setState({
            eatingContainers : eatingContainersCopy,
            totalNutrition: eatingContainersCopy.reduce(reducer, initialEatingContainer)
        });        
    };

    render() {
        const { protein = 0, fat = 0, carbohydrate = 0, calorie = 0 } = this.state.totalNutrition || initialEatingContainer;
        
        return (
            <div className="main-table">
                <Table>
                    <thead>
                        <tr>
                        {
                            headers.map((header, i) => 
                                <th key={i + header}>{header}</th>
                            )
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.eatingContainers.map((container, i) => 
                                <EatingContainer key={i} title={container.key}
                                    onRemove={this.onRemoveEatingContainer}
                                    onChange={this.onChangeEatingContainer}/>
                            )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>{protein}</td>
                            <td>{fat}</td>
                            <td>{carbohydrate}</td>
                            <td>{calorie}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        ) 
    }
}

export default MealTable;
