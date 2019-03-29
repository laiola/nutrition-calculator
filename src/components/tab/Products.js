import React, { Component } from 'react';

import { Header } from '../header/Header';
import Table from '../table/Table';

class Products extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Table
                    headers={[1, 2, 3]}
                    rows={[{ 11: 11, 22: 22, 33: 33 }]}/>
            </div>
        )
    }
}

export default Products;
