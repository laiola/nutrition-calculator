import { ActionNames } from '../../../constant/ActionName';
import { NutritionReducerMock } from '../../mock/NutritionReducerMock';
import { nutrition } from '../../../reducers/nutrition';
import { submitGoalRatio, submitNutritionRatio } from '../../../actions/ActionCreator';

describe('Nutrition Reducer', () => {
    afterEach(() => localStorage.clear());

    it('should return the initial state', () => {
        expect(nutrition(undefined, {}))
            .toEqual(NutritionReducerMock.initialState);
    });

    it(`should handle ${ActionNames.SUBMIT_GOAL_RATIO} with correct data`, () => {
        const action = submitGoalRatio(1.2, 1000);
        expect(nutrition(NutritionReducerMock.initialSubmitState, action))
            .toEqual(NutritionReducerMock.expectedSubmitRatioState);
    });

    it(`should handle ${ActionNames.SUBMIT_GOAL_RATIO} with initial state`, () => {
        const action = submitGoalRatio(1, 1500);
        expect(nutrition(undefined, action))
            .toEqual(NutritionReducerMock.expectedSubmitRatioStateWithInitial);
    });

    it(`should handle ${ActionNames.SUBMIT_NUTRITION_RATIO} with correct data`, () => {
        const action = submitNutritionRatio(1, 1, 50);
        expect(nutrition(NutritionReducerMock.initialSubmitState, action))
            .toEqual(NutritionReducerMock.expectedSubmitNutritionRatioState);
    });

    it(`should handle ${ActionNames.SUBMIT_NUTRITION_RATIO} with initial state`, () => {
        const action = submitNutritionRatio(1.5, 0.8, 45);
        expect(nutrition(undefined, action))
            .toEqual(NutritionReducerMock.expectedSubmitNutritionRatioStateWithInitial);
    });
});
