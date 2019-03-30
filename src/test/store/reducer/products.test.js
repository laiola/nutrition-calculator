import { ProductsReducerMock } from '../../mock/ProductsReducerMock';
import { products } from '../../../reducers/products';
import { ActionNames } from '../../../constant/ActionName';
import { deleteProduct, submitProduct } from '../../../actions/ActionCreator';

describe('Products Reducer', () => {
    afterEach(() => localStorage.clear());

    it('should return the initial state', () => {
        expect(products(undefined, {}))
            .toEqual(ProductsReducerMock.initialState);
    });

    it('should return the current state with no action', () => {
        expect(products(ProductsReducerMock.initialCurrentState, {}))
            .toEqual(ProductsReducerMock.initialCurrentState);
    });

    it(`should handle add action ${ActionNames.SUBMIT_PRODUCT}`, () => {
        const action = submitProduct(false, ProductsReducerMock.addedProduct);
        const result = products(undefined, action);

        expect(result).toEqual(ProductsReducerMock.stateWithAdded);
        expect(result.length).toBe(1);
        expect(result[0]).toEqual(ProductsReducerMock.addedProduct);
    });

    it(`should handle edit action ${ActionNames.SUBMIT_PRODUCT}`, () => {
        const action = submitProduct(0, ProductsReducerMock.updatedProduct);
        const result = products(ProductsReducerMock.stateWithAdded, action);

        expect(result).toEqual(ProductsReducerMock.stateWithUpdated);
        expect(result.length).toBe(1);
        expect(result[0]).toEqual(ProductsReducerMock.updatedProduct);
    });


    it(`should handle ${ActionNames.DELETE_PRODUCT}`, () => {
        const action = deleteProduct(0);
        const result = products(ProductsReducerMock.stateWithAdded, action);

        expect(result).toEqual(ProductsReducerMock.emptyState);
        expect(result.length).toBe(0);
    });
});
