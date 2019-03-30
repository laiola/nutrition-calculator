import React from 'react';

import { Header } from '../header/Header';
import Table from '../table/Table';

const headers = [
    'Title',
    'Weight',
    'Protein',
    'Fat',
    'Carbohydrate',
    'Calorie',
    'Protein Per 100',
    'Fat Per 100',
    'Carbohydrate Per 100',
    'Calorie Per 100',
];

export const Products = ({ products, onSubmit, onDelete }) => (
    <div>
        <Header/>
        <Table
            headers={headers}
            rows={products}
            onSubmit={onSubmit}
            onDelete={onDelete}
        />
    </div>
);
