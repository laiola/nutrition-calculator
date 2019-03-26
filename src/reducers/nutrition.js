import { ActionNames } from '../constant/ActionName';
import { calculateMacronutrient } from '../helper/nutritionCalculator';
import { getOrDefault, NUTRITION_KEY, storeObject } from '../helper/localStorageHelper';

const initialNutritionState = {
    goalIntake: 0,
    protein: 0, 
    fat: 0, 
    carbohydrate: 0,
};

export const nutrition = (
    state = getOrDefault(NUTRITION_KEY, {...initialNutritionState}), 
    action) => {
    switch(action.type) {
        case ActionNames.SUBMIT_GOAL_RATIO: {
            const { goalRatio, totalIntake } = action;
            const updatedState = {
                ...state,
                goalIntake: Math.round(totalIntake * goalRatio)
            };

            storeObject(NUTRITION_KEY, updatedState);
            return updatedState;
        } 
        case ActionNames.SUBMIT_NUTRITION_RATIO: {
            const { goalIntake } = state;
            const { proteinRatio, fatRatio, weight } = action;
            const updatedState = {
                ...state,
                ...calculateMacronutrient(goalIntake, weight, fatRatio, proteinRatio)
            };

            storeObject(NUTRITION_KEY, updatedState);
            return updatedState;
        }
        default:
            return state;
    }
};
