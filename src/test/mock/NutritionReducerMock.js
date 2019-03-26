import { initialNutritionState } from '../../reducers/nutrition';

export const NutritionReducerMock = {
    initialState: {
        ...initialNutritionState
    },
    initialSubmitState: {
        goalIntake: 1000,
    },
    expectedSubmitRatioState: {
        goalIntake: 1200,
    },
    expectedSubmitRatioStateWithInitial: {
        goalIntake: 1500,
        protein: 0,
        fat: 0,
        carbohydrate: 0,
    },
    expectedSubmitNutritionRatioState: {
        goalIntake: 1000,
        protein: 50,
        fat: 50,
        carbohydrate: 88,
    },
    expectedSubmitNutritionRatioStateWithInitial: {
        goalIntake: 0,
        protein: 0,
        fat: 0,
        carbohydrate: 0,
    },
};
