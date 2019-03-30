import { initialProductsState } from '../../reducers/products';

const addedProduct = {
    'title': 'test',
    'weight': 1000,
    'protein': 20,
    'fat': 20,
    'carbohydrate': 20,
    'calorie': 20,
    'proteinPer': 2,
    'fatPer': 2,
    'carbohydratePer': 2,
    'caloriePer': 2
};

const updatedProduct = {
    ...addedProduct,
    'title': 'updated'
};

export const ProductsReducerMock = {
    initialState: [...initialProductsState],
    initialCurrentState: [{}, {}],
    addedProduct: addedProduct,
    stateWithAdded: [addedProduct],
    updatedProduct: updatedProduct,
    stateWithUpdated: [updatedProduct],
    emptyState: []
};
