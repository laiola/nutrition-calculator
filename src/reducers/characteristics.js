import { ActionNames } from '../constant/ActionName';
import { FEMALE } from '../constant/Sex';
import { NORMAL_ACTIVITY } from '../constant/Activity';
import { RECOMMENDED_PROTEIN_RATIO, RECOMMENDED_FAT_RATIO } from '../constant/NutritionRatio';
import { DEFAULT_GOAL_RATIO } from '../components/goal-selector/GoalSelector';
import { calculateTotalIntake } from '../helper/nutritionCalculator';

const initialCharacteristicsState = {
    weight: 0,
    height: 0,
    age: 0,
    sex: FEMALE,
    activity: NORMAL_ACTIVITY,
    goalRatio: DEFAULT_GOAL_RATIO,
    proteinRatio: RECOMMENDED_PROTEIN_RATIO,
    fatRatio: RECOMMENDED_FAT_RATIO,
    totalIntake: 0
};

export const characteristics = (state = {...initialCharacteristicsState}, action) => {
    switch(action.type) {
        case ActionNames.SUBMIT_CHARACTERISTICS: 
            const totalIntake = calculateTotalIntake(state);
            return {
                ...state,
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
