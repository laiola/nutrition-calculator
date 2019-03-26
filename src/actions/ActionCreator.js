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
        type: ActionNames.SUBMIT_NUTRITATION_RATIO,
        proteinRatio,
        fatRatio,
        weight
    }
);
