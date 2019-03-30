import React, { Component } from 'react';

import './Table.css';
import ProductModal from '../modal/ProductModal';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayModal: false,
            editable: false,
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
            editable: i,
        });
    };

    onDelete = i => () => {
        this.props.onDelete(i);
    };

    onSubmit = i => row => {
        this.props.onSubmit(i, row);
    };

    onClose = () => {
        this.setState({
            isDisplayModal: false,
            editable: false,
        })
    };

    render() {
        const { headers, rows } = this.props;
        const { isDisplayModal, editable } = this.state;

        return (
            <div className="table-container">
                {
                    isDisplayModal
                    && <ProductModal onSubmit={this.onSubmit(editable)}
                                     onClose={this.onClose}
                                     isDisplayedProductModal={isDisplayModal}
                                     product={(editable || editable === 0) && rows[editable]}
                    />
                }
                <div className="btn-container">
                    <button className="btn btn-info add-row-btn" onClick={this.onAdd}>Add</button>
                </div>
                <div className="table-1">
                    <div className="headers">
                        {
                            headers.map((header, i) =>
                                <div className="header" key={`${header}-${i}`}>
                                    {header}
                                </div>
                            )
                        }
                    </div>
                    <div className="content">
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
                                    <button className="btn btn-danger delete-row-btn"
                                            onClick={this.onDelete(i)}>Delete row
                                    </button>
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
