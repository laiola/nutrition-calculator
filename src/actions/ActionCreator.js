import { ActionNames } from '../constant/ActionName';

export const submitCharacteristics = ({ weight, height, age, sex, activity }) => (
    {
        type: ActionNames.SUBMIT_CHARACTERISTICS,
        sex,
        weight,
        height,
        age,
        activity
    }
);

export const submitGoalRatio = (goalRatio, totalIntake) => (
    {
        type: ActionNames.SUBMIT_GOAL_RATIO,
        goalRatio,
        totalIntake
    }
);

export const submitNutritionRatio = (proteinRatio, fatRatio, weight, goalIntake) => (
    {
        type: ActionNames.SUBMIT_NUTRITATION_RATIO,
        proteinRatio,
        fatRatio,
        weight,
        goalIntake
    }
);

export const characteristiceInputChange = (inputName, inputValue) => 
    changeInput(ActionNames.CHARACTERISTICS_INPUT_CHANGE, inputName, inputValue);

export const goalRatioInputChange = (inputName, inputValue) =>
    changeInput(ActionNames.GOAL_RATIO_INPUT_CHANGE, inputName, inputValue);

export const nutritionRatioInputChange = (inputName, inputValue) =>
    changeInput(ActionNames.NUTRITION_RATIO_INPUT_CHANGE, inputName, inputValue);

const changeInput = (type, inputName, inputValue) => (
    {
        type: type,
        inputName,
        inputValue   
    }
);
