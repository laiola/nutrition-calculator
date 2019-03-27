import React, { Component } from 'react';

const SIMPLE_COL_START = 0;
const SIMPLE_COL_END = 2;
const COEFFICIENT_COL_START = 2;
const COEFFICIENT_COL_END = 6;
const WEIGHT_INDEX = 1;

class ProductRow extends Component {
    constructor(props) {
        super(props);

        const weightCoefficient = props.values[WEIGHT_INDEX] / 100;
        const nutrions = props.values.slice(COEFFICIENT_COL_START, COEFFICIENT_COL_END)
            .map(value => weightCoefficient * value);

        this.state = {
            nutrions: nutrions
        }
    }

    componentDidMount() {
        const { title, updateContainer } = this.props;
        updateContainer(title, this.state.nutrions);
    }

    render() {
        const { values, onAction: onClick } = this.props;
        const { nutrions } = this.state;

        return (
            <tr>
                {
                    values.slice(SIMPLE_COL_START, SIMPLE_COL_END)
                        .map((value, i) => <td key={i + value}>{value}</td>)
                }
                {
                    nutrions.map((value, i) => <td key={i + value}>{value}</td>)
                }
                <td>
                    <button type="button" className="btn btn-outline-info"
                            onClick={onClick}>Edit
                    </button>
                </td>
            </tr>
        )
    }
}

export default ProductRow;
