import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import ProductSelect from './ProductSelect';

import './Table.css';

const initialRow = {
    title: 'Input title',
    weight: 0,
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    calorie: 0,
    proteinPer: 0,
    fatPer: 0,
    carbohydratePer: 0,
    caloriePer: 0,
};

class TempTable extends Component {
    static defaultProps = {
        goalIntake: 0,
        goalProtein: 0,
        goalFat: 0,
        goalCarbohydrate: 0
    };

    onAddRow = () => {
        this.props.onAddRow({ ...initialRow });
    };

    onAddPresetRow = product => {
        this.props.onAddRow({ ...product });
    };

    onChangeRow = i => event => {
        this.props.onChangeRow(i, event.target.getAttribute('name'), event.target.innerText);
    };

    // todo fix rows initialization and write test
    render() {
        const {
            rows = [], protein, fat, carbohydrate, calorie,
            goalIntake, goalProtein, goalFat, goalCarbohydrate
        } = this.props;

        console.debug();
        return (
            <>
                <ProductSelect onSelect={this.onAddPresetRow}/>
                <div className="btn-container">
                    <button className="btn btn-info add-row-btn" onClick={this.onAddRow}>Add row</button>
                </div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Weight</th>
                        <th>Protein</th>
                        <th>Fat</th>
                        <th>Carbohydrate</th>
                        <th>Calorie</th>
                        <th>Protein Per 100</th>
                        <th>Fat Per 100</th>
                        <th>Carbohydrate Per 100</th>
                        <th>Calorie Per 100</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rows.map((row, i) =>
                            <tr key={i}>
                                <td contentEditable suppressContentEditableWarning>{row.title}</td>
                                <td contentEditable suppressContentEditableWarning
                                    onBlur={this.onChangeRow(i)} name="weight">{row.weight}</td>
                                <td>{row.protein}</td>
                                <td>{row.fat}</td>
                                <td>{row.carbohydrate}</td>
                                <td>{row.calorie}</td>
                                <td contentEditable suppressContentEditableWarning
                                    onBlur={this.onChangeRow(i)} name="proteinPer">{row.proteinPer}</td>
                                <td contentEditable suppressContentEditableWarning
                                    onBlur={this.onChangeRow(i)} name="fatPer">{row.fatPer}</td>
                                <td contentEditable suppressContentEditableWarning
                                    onBlur={this.onChangeRow(i)} name="carbohydratePer">{row.carbohydratePer}</td>
                                <td contentEditable suppressContentEditableWarning
                                    onBlur={this.onChangeRow(i)} name="caloriePer">{row.caloriePer}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{protein}</td>
                        <td>{fat}</td>
                        <td>{carbohydrate}</td>
                        <td>{calorie}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Goal</td>
                        <td></td>
                        <td>{goalProtein}</td>
                        <td>{goalFat}</td>
                        <td>{goalCarbohydrate}</td>
                        <td>{goalIntake}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default TempTable;
