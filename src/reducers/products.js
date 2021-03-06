import { getOrDefault, PRODUCTS_KEY, storeObject } from '../helper/localStorageHelper';
import { ActionNames } from '../constant/ActionName';

export const initialProductsState = [];

export const products = (
    state = getOrDefault(PRODUCTS_KEY, [...initialProductsState]),
    action
) => {
    switch (action.type) {
        case ActionNames.SUBMIT_PRODUCT: {
            const newProducts = [...state];
            const { productIndex, product } = action;

            if (productIndex || productIndex === 0) {
                newProducts[productIndex] = product;
            } else {
                newProducts.push(product);
            }

            storeObject(PRODUCTS_KEY, newProducts);
            return newProducts;
        }
        case ActionNames.DELETE_PRODUCT: {
            const newProducts = [...state];
            const { productIndex } = action;

            newProducts.splice(productIndex, 1);

            storeObject(PRODUCTS_KEY, newProducts);
            return newProducts;
        }
        default:
            return state;
    }
};
