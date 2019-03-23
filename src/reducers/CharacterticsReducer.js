import { ActionNames } from '../constant/ActionName';
import { calculateTotalIntake } from '../helper/nutritionCalculator';

export const characteristicsReducer = (state = {}, action) => {
    switch(action.type) {
        case ActionNames.SUBMIT_CHARACTERISTICS: 
            const { sex, weight, height, age, activity } = action;
            const totalIntake = calculateTotalIntake(action);

            return {
                sex,
                weight,
                height,
                age,
                activity,
                totalIntake
            };

        case ActionNames.CHARACTERISTICS_INPUT_CHANGE:
            const updatedState = {...state};
            updatedState[action.inputName] = action.inputValue;
            return updatedState;

        default:
            return state;
    }
}
