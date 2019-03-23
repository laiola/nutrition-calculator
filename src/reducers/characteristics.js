import { ActionNames } from '../constant/ActionName';
import { calculateTotalIntake } from '../helper/nutritionCalculator';
import { FEMALE } from '../constant/Sex';
import { NORMAL_ACTIVITY } from '../constant/Activity';

const initialCharacteristicsState = {
    weight: 0,
    height: 0,
    age: 0,
    sex: FEMALE,
    activity: NORMAL_ACTIVITY,
    totalIntake: 0,
};

export const characteristics = (state = {...initialCharacteristicsState}, action) => {
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
