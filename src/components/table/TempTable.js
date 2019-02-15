import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

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
}

const initialTotal = {
    protein: 0,
    fat : 0,
    carbohydrate: 0,
    calorie: 0
};

const nutritionReducer = (accumulator, nutrition) => {
    accumulator.protein += nutrition.protein;
    accumulator.fat += nutrition.fat;
    accumulator.carbohydrate += nutrition.carbohydrate;
    accumulator.calorie += nutrition.calorie;

    return accumulator;
};

class TempTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            ...initialTotal
        }
    }

    onAddRow = () => {
        const { rows } = this.state;
        this.setState({
            rows: [...rows, {...initialRow}]
        })
    };

    onChangeRow = i => event => {
        const updatedRows = this.getUpdatetRows(i, event);

        this.setState({
            rows: updatedRows,
            ...this.getUpdatedNutrition(updatedRows)
        })
    };

    getUpdatetRows = (i, event) => {
        const updatedRows = [...this.state.rows];
        const row = updatedRows[i];
        row[event.target.getAttribute('name')] = event.target.innerText;

        const weightCoef = row.weight / 100;

        row.protein = weightCoef * row.proteinPer;
        row.fat = weightCoef * row.fatPer;
        row.carbohydrate = weightCoef * row.carbohydratePer;
        row.calorie = weightCoef * row.caloriePer;   

        return updatedRows;
    };

    /*
            return {
            protein: nutrition.protein.toFixed(1),
            fat: nutrition.fat.toFixed(1),
            carbohydrate: nutrition.carbohydrate.toFixed(1),
            calorie: nutrition.calorie.toFixed(1),

            protein: Math.round(nutrition.protein),
            fat: Math.round(nutrition.fat),
            carbohydrate: Math.round(nutrition.carbohydrate),
            calorie: Math.round(nutrition.calorie),
        }
    */

    getUpdatedNutrition = (rows) => {
        const nutrition = rows.reduce(nutritionReducer, {...initialTotal});
        
        return {
            protein: nutrition.protein.toFixed(1),
            fat: nutrition.fat.toFixed(1),
            carbohydrate: nutrition.carbohydrate.toFixed(1),
            calorie: nutrition.calorie.toFixed(1),
        }
    };

    render() {
        const { rows, protein, fat, carbohydrate, calorie, } = this.state;
        return(
            <>
                <button className="btn btn-info" onClick={this.onAddRow}>Add row</button>
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
                            <td></td>
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
                    </tbody>
                </Table>
            </>
        );
    }
}

export default TempTable;
