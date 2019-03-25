import { ActionNames } from '../constant/ActionName';
import { calculateMacronutrient } from '../helper/nutritionCalculator';

const initialNutritionState = {
    goalIntake: 0,
    protein: 0, 
    fat: 0, 
    carbohydrate: 0,
};

export const nutrition = (state = {...initialNutritionState}, action) => {
    switch(action.type) {
        case ActionNames.SUBMIT_GOAL_RATIO: 
            const { goalRatio, totalIntake } = action;
            return {
                ...state,
                goalIntake: Math.round(totalIntake * goalRatio)
            };

        case ActionNames.SUBMIT_NUTRITATION_RATIO:
            const { goalIntake } = state;
            const { proteinRatio, fatRatio, weight } = action;
            return {
                ...state,
                ...calculateMacronutrient(goalIntake, weight, fatRatio, proteinRatio)
            };

        default:
            return state;
    }
}
