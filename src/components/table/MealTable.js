import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import EatingContainer from '../container/EatingContainer';

import './MealTable.css';

const headers = ['Title', 'Weight', 'P', 'F', 'C', 'Calorie', 'Edit Nutrition'];
const eatings = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];
const initialEatingContainer = {
    protein: 0,
    fat : 0,
    carbohydrate: 0,
    weight: 0,
    calorie: 0
};

const initialEatingContainers = eatings.map(value => ({
    value,
    ...initialEatingContainer
}));

class MealTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eatingContainers : initialEatingContainers,
        };
    };

    onRemoveEatingContainer = title => {
        this.setState({
            eatingContainers : this.state.eatingContainers.filter(el => el.value !== title)
        });
    };

    render() {
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
                            this.state.eatingContainers.map((value, i) => 
                                <EatingContainer key={i} title={value.value}
                                    onRemove={this.onRemoveEatingContainer}/>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        ) 
    }
};

export default MealTable;
