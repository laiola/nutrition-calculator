import React, { Component } from 'react';
import EatingContainer from '../container/EatingContainer';

import './MealTable.css';

const headers = ['Title', 'Weight', 'Protein', 'Fat', 'Carbohydrate', 'Calorie', 'Edit Nutrition'];
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
                <TableRow values={headers} rowClass="table-header" cellClass="table-cell"/>
                {
                    this.state.eatingContainers.map((value, i) => 
                        <EatingContainer key={i + value} title={value.value}
                            onRemove={this.onRemoveEatingContainer}/>
                    )
                }
            </div>
        ) 
    }
};

export default MealTable;

export const TableRow = ({ values, rowClass, cellClass, }) => {
    return (
        <div className={rowClass}>
            {
                values.map((value, i) => 
                    <TableCell key={i} value={value} className={cellClass}/> 
                )
            }
        </div>
    ) 
};

export const TableCell = ({ value, className, }) =>{
    return (
        <div className={className}>
            {value}
        </div>
    ) 
}
