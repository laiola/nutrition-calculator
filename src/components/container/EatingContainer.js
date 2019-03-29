import React, { Component } from 'react';
import ProductModal from '../modal/ProductModal';
import ProductRow from '../table/ProductRow';

// TODO DELETE?
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
    };

    render() {
        const { title } = this.props;

        return (
            <>
                <tr>
                    <td rowSpan="2" colSpan="6">{title}</td>
                    <td><ProductModal onSubmit={this.onAdd}/></td>
                </tr>
                <tr>
                    <td>
                        <button className="btn btn-danger" onClick={this.onClear}>Clear</button>
                    </td>
                </tr>
                {
                    this.state.rows.map((value, i) =>
                        <ProductRow key={i} values={Object.values(value)} title={title}
                                    updateContainer={this.props.onChange}/>)
                }
            </>
        )
    }
}

export default EatingContainer;
