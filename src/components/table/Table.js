import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
    render() {
        const { headers, rows } = this.props;

        return (
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
                                    Object.keys(row).map((key, i) =>
                                        <div className="cell" key={`${key}-${i}`}>
                                            {row[key]}
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Table;
