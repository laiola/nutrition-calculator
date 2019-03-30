import { ActionNames } from '../constant/ActionName';

export const submitCharacteristics = () => (
    {
        type: ActionNames.SUBMIT_CHARACTERISTICS,
    }
);

export const characteristicsInputChange = (inputName, inputValue) => (
    {
        type: ActionNames.CHARACTERISTICS_INPUT_CHANGE,
        inputName,
        inputValue
    }
);

export const submitGoalRatio = (goalRatio, totalIntake) => (
    {
        type: ActionNames.SUBMIT_GOAL_RATIO,
        goalRatio,
        totalIntake
    }
);

export const submitNutritionRatio = (proteinRatio, fatRatio, weight) => (
    {
        type: ActionNames.SUBMIT_NUTRITION_RATIO,
        proteinRatio,
        fatRatio,
        weight
    }
);

export const addRowToMenu = row => (
    {
        type: ActionNames.ADD_ROW_TO_MENU,
        row
    }
);

export const deleteMenuRow = rowIndex => (
    {
        type: ActionNames.DELETE_MENU_ROW,
        rowIndex
    }
);

export const changeRow = (rowIndex, inputName, inputValue) => (
    {
        type: ActionNames.MENU_ROW_INPUT_CHANGE,
        rowIndex,
        inputName,
        inputValue
    }
);

export const calculateNutrition = () => (
    {
        type: ActionNames.CALCULATE_MENU_NUTRITION
    }
);

export const submitProduct = (productIndex, product) => (
    {
        type: ActionNames.SUBMIT_PRODUCT,
        productIndex,
        product
    }
);

export const deleteProduct = productIndex => (
    {
        type: ActionNames.DELETE_PRODUCT,
        productIndex
    }
);
