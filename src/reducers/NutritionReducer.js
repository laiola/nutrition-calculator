import { ActionNames } from '../constant/ActionName';
import { calculateMacronutrient } from '../helper/nutritionCalculator';

export const nutritionReducer = (state = {}, action) => {
    switch(action.type) {
        case ActionNames.NUTRITION_RATIO_INPUT_CHANGE:
            const updatedState = {...state};
            updatedState[action.inputName] = action.inputValue;
            return updatedState;

        case ActionNames.SUBMIT_NUTRITATION_RATIO:
            const { proteinRatio, fatRatio, weight, goalIntake } = action;
            return {
                ...state,
                ...calculateMacronutrient(goalIntake, weight, fatRatio, proteinRatio)
            };
        default:
            return state;
    }
}
