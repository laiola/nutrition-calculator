import React, { Component } from 'react';

import ProductModal from '../modal/ProductModal';

import './Table2.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayModal: false,
            editIndex: false,
        }
    }

    onAdd = () => {
        this.setState({
            isDisplayModal: true,
        });
    };

    onEdit = i => () => {
        this.setState({
            isDisplayModal: true,
            editIndex: i,
        });
    };

    onDelete = i => () => {
        this.props.onDelete(i);
    };

    onSubmit = row => {
        this.props.onSubmit(this.state.editIndex, row);
    };

    onClose = () => {
        this.setState({
            isDisplayModal: false,
            editIndex: false,
        })
    };

    render() {
        const { headers, rows } = this.props;
        const { isDisplayModal, editIndex } = this.state;
        const product = (editIndex || editIndex === 0) && rows[editIndex];

        return (
            <div className="table-container">
                {
                    isDisplayModal
                    && <ProductModal onSubmit={this.onSubmit}
                                     onClose={this.onClose}
                                     isDisplayedProductModal={isDisplayModal}
                                     product={product}
                    />
                }
                <div className="btn-container-1">
                    <button className="btn btn-info add-btn" onClick={this.onAdd}>Add</button>
                </div>

                <div className="table-1">
                    <div className="row-1 headers">
                        {
                            headers.map((header, i) =>
                                <div className="cell header" key={`${header}-${i}`}>
                                    {header}
                                </div>
                            )
                        }
                        <div className="cell header delete-row"></div>
                    </div>
                    <div>
                        {
                            rows.map((row, i) =>
                                <div className="row-1" key={`${row}-${i}`}>
                                    {
                                        Object.keys(row).map((key, j) =>
                                            <div className="cell" key={`${key}-${j}`} onClick={this.onEdit(i)}>
                                                {row[key]}
                                            </div>
                                        )
                                    }
                                    <div className="cell delete-row">
                                        <button className="btn btn-danger delete-btn"
                                                onClick={this.onDelete(i)}>Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;
