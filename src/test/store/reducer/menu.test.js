import { menu } from '../../../reducers/menu';
import { MenuReducerMock } from '../../mock/MenuReducerMock';
import { ActionNames } from '../../../constant/ActionName';
import { addRowToMenu, calculateNutrition, deleteMenuRow } from '../../../actions/ActionCreator';

describe('Menu Reducer Test', () => {
    it('should return the initial state', () => {
        expect(menu(undefined, {}))
            .toEqual(MenuReducerMock.initialState);
    });

    it(`should add new empty row [Action: ${ActionNames.ADD_ROW_TO_MENU}]`, () => {
        const result = menu(MenuReducerMock.initialState, addRowToMenu(MenuReducerMock.initialRow));

        expect(result.rows).toBeDefined();
        expect(result.rows.length).toBe(1);
        expect(result.rows[0]).toEqual(MenuReducerMock.initialRow);
    });

    it(`should add row [Action: ${ActionNames.ADD_ROW_TO_MENU}]`, () => {
        const result = menu(MenuReducerMock.initialState, addRowToMenu(MenuReducerMock.productRow));

        expect(result.rows).toBeDefined();
        expect(result.rows.length).toBe(1);
        expect(result.rows[0]).toEqual(MenuReducerMock.productRow);
    });

    it(`should delete row [Action: ${ActionNames.DELETE_MENU_ROW}]`, () => {
        const updatedState = menu(MenuReducerMock.initialState, addRowToMenu(MenuReducerMock.productRow));

        expect(updatedState.rows).toBeDefined();
        expect(updatedState.rows.length).toBe(1);

        const result = menu(updatedState, deleteMenuRow(0));

        expect(result.rows).toBeDefined();
        expect(result.rows.length).toBe(0);
    });

    it(`should calculate nutrition with initial data [Action: ${ActionNames.CALCULATE_MENU_NUTRITION}]`, () => {
        const result = menu(MenuReducerMock.initialState, calculateNutrition());
        const expected = "0.0";

        expect(result.protein).toBe(expected);
        expect(result.fat).toBe(expected);
        expect(result.carbohydrate).toBe(expected);
        expect(result.calorie).toBe(expected);
    });

    it(`should calculate nutrition with updated data [Action: ${ActionNames.CALCULATE_MENU_NUTRITION}]`, () => {
        const result = menu(MenuReducerMock.stateWithRowDefaultNutrition, calculateNutrition());
        const expected = "20.0";

        expect(result.protein).toBe(expected);
        expect(result.fat).toBe(expected);
        expect(result.carbohydrate).toBe(expected);
        expect(result.calorie).toBe(expected);
    });

});
