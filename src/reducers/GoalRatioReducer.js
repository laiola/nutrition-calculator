import { DEFAULT_GOAL_RATIO } from '../components/goal-selector/GoalSelector';
import { ActionNames } from '../constant/ActionName';

export const goalRatioReducer = (state = DEFAULT_GOAL_RATIO, action) => {
    switch(action.type) {
        case ActionNames.GOAL_RATIO_INPUT_CHANGE:
            return {
                ...state,
                goalRatio: action.goalRatio
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
