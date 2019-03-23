import { DEFAULT_GOAL_RATIO } from '../components/goal-selector/GoalSelector';
import { ActionNames } from '../constant/ActionName';

const initialGoalRatioState = {
    goalRatio: DEFAULT_GOAL_RATIO,
    goalIntake: 0,
};

export const goal = (state = {...initialGoalRatioState}, action) => {
    switch(action.type) {
        case ActionNames.GOAL_RATIO_INPUT_CHANGE:
            return {
                ...state,
                goalRatio: action.inputValue
            };
        case ActionNames.SUBMIT_GOAL_RATIO: 
            const { totalIntake, goalRatio } = action;
            return {
                ...state,
                goalIntake: Math.round(totalIntake * goalRatio)
            }
        default:
            return state;
    }
}
