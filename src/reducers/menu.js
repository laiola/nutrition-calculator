import { ActionNames } from '../constant/ActionName';
import { calculateNutritionByWeight } from '../helper/nutritionCalculator';

const initialTotal = {
    protein: 0,
    fat: 0,
    carbohydrate: 0,
    calorie: 0
};

export const initialMenuState = {
    rows: [],
    ...initialTotal,
};

export const menu = (
    state = { ...initialMenuState },
    action
) => {
    switch (action.type) {
        case ActionNames.ADD_ROW_TO_MENU: {
            return {
                ...state,
                rows: [...state.rows, { ...action.row }]
            };
        }
        case ActionNames.MENU_ROW_INPUT_CHANGE: {
            const { rowIndex, inputName, inputValue } = action;

            const updatedRows = [...state.rows];

            const row = updatedRows[rowIndex];
            row[inputName] = inputValue;

            updatedRows[rowIndex] = calculateNutritionByWeight(row);

            return {
                rows: updatedRows,
                ...getUpdatedNutrition(updatedRows),
            }
        }
        default:
            return state;

    }
};

const nutritionReducer = (accumulator, nutrition) => {
    accumulator.protein += nutrition.protein;
    accumulator.fat += nutrition.fat;
    accumulator.carbohydrate += nutrition.carbohydrate;
    accumulator.calorie += nutrition.calorie;

    return accumulator;
};

const getUpdatedNutrition = (rows) => {
    const nutrition = rows.reduce(nutritionReducer, { ...initialTotal });

    return {
        protein: nutrition.protein.toFixed(1),
        fat: nutrition.fat.toFixed(1),
        carbohydrate: nutrition.carbohydrate.toFixed(1),
        calorie: nutrition.calorie.toFixed(1),
    }
};
