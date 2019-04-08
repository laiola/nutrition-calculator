import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/Header';
import ProductTable from '../table/ProductTable';

export const headers = [
    'Title',
    'Weight',
    'Protein',
    'Fat',
    'Carbs',
    'Calorie',
    'Protein Per 100',
    'Fat Per 100',
    'Carbs Per 100',
    'Calorie Per 100',
];

export const Products = ({ products, onSubmit, onDelete }) => (
    <div>
        <Header/>
        <ProductTable
            headers={headers}
            rows={products}
            onSubmit={onSubmit}
            onDelete={onDelete}
        />
    </div>
);

Products.propTypes = {
    products: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
