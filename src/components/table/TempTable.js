import React, { Component } from 'react';

import { headers } from '../tab/Products';
import ProductSelect from './ProductSelect';

import './Table.css';

export const initialRow = {
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
        this.props.updateNutrition();
    };

    onChangeRow = i => event => {
        const target = event.target;
        this.props.onChangeRow(i, target.name, target.value);
    };

    onDeleteRow = i => () => {
        this.props.onDeleteRow(i);
        this.props.updateNutrition();
    };

    getEditableCell = (value, name, rowIndex) => (
        <div className="cell">
            <input type="text" className="cell-input" value={value} name={name} onChange={this.onChangeRow(rowIndex)}/>
        </div>
    );

    render() {
        const {
            rows, protein, fat, carbohydrate, calorie,
            goalIntake, goalProtein, goalFat, goalCarbohydrate
        } = this.props;

        return (
            <>
                <div className="product-select-container">
                    <ProductSelect onSelect={this.onAddPresetRow}/>
                    <button className="btn btn-info add-row-btn" onClick={this.onAddRow}>Add row</button>
                </div>
                <div className="table">
                    <div className="product-row headers">
                        {
                            headers.map((header, i) =>
                                <div className="cell header" key={`${header}-${i}`}>
                                    {header}
                                </div>
                            )
                        }
                        <div className="cell header delete-row"/>
                    </div>
                    <div>
                        {
                            rows.map((row, i) =>
                                <div className="product-row" key={i}>
                                    {this.getEditableCell(row.title, 'title', i)}
                                    {this.getEditableCell(row.weight, 'weight', i)}
                                    <div className="cell">{row.protein}</div>
                                    <div className="cell">{row.fat}</div>
                                    <div className="cell">{row.carbohydrate}</div>
                                    <div className="cell">{row.calorie}</div>
                                    {this.getEditableCell(row.proteinPer, 'proteinPer', i)}
                                    {this.getEditableCell(row.fatPer, 'fatPer', i)}
                                    {this.getEditableCell(row.carbohydratePer, 'carbohydratePer', i)}
                                    {this.getEditableCell(row.caloriePer, 'caloriePer', i)}
                                    <div className="cell delete-row">
                                        <button className="btn btn-danger delete-row-btn"
                                                onClick={this.onDeleteRow(i)}>Delete row
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        <div className="product-row">
                            <div className="cell">Total</div>
                            <div className="cell"/>
                            <div className="cell">{protein}</div>
                            <div className="cell">{fat}</div>
                            <div className="cell">{carbohydrate}</div>
                            <div className="cell">{calorie}</div>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell delete-row"/>
                        </div>
                        <div className="product-row">
                            <div className="cell">Goal</div>
                            <div className="cell"/>
                            <div className="cell">{goalProtein}</div>
                            <div className="cell">{goalFat}</div>
                            <div className="cell">{goalCarbohydrate}</div>
                            <div className="cell">{goalIntake}</div>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell"/>
                            <div className="cell delete-row"/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TempTable;
