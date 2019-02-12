import React, { Component } from 'react';
import ProductModal from '../modal/ProductModal';

class EatingContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
        }
    }

    onAdd = (row) => {
        const rows = [...this.state.rows, row];

        this.setState({
            rows: rows,
        });
    };

    onClear = () => {
        this.setState({
            rows: [],
        });
    }

    render() {
        return (
            <>
                <tr>
                    <td rowSpan="2" colSpan="6">{this.props.title}</td>
                    <td><ProductModal onSubmit={this.onAdd}/></td>
                </tr>
                <tr>
                    <td>
                        <button className="btn btn-danger" onClick={this.onClear}>Clear</button>
                    </td>
                </tr>
                {
                    this.state.rows.map( (value, i) =>
                        <ProductRow key={i} values={Object.values(value)}/>)
                }
            </>
        ) 
    }
}

export default EatingContainer;

const SIMPLE_COL_START = 0;
const SIMPLE_COL_END = 2;
const COEFFICIENT_COL_START = 2;
const COEFFICIENT_COL_END = 6;
const WEIGHT_INDEX = 1;

const ProductRow = ({ values, onAction: onClick }) => {
    const weightCoefficient = values[WEIGHT_INDEX] / 100;

    return (
        <tr>
            {
                values.slice(SIMPLE_COL_START, SIMPLE_COL_END)
                    .map((value, i) => <td key={i + value}>{value}</td>)
            }
            {
                values.slice(COEFFICIENT_COL_START, COEFFICIENT_COL_END)
                    .map((value, i) =>
                        <td key={i + value}>{weightCoefficient * value}</td>)
            }
            <td>
                <button type="button" className="btn btn-outline-info"
                    onClick={onClick}>Edit</button>
            </td>
        </tr>
    )
}
