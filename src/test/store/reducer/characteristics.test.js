import { ActionNames } from '../../../constant/ActionName';
import { MALE } from '../../../constant/Sex';
import { CharacteristicReducerMock } from '../../mock/CharacteristicReducerMock';
import { characteristicsInputChange, submitCharacteristics } from '../../../actions/ActionCreator';
import { characteristics } from '../../../reducers/characteristics';

describe('Characteristic Reducer', () => {
    afterEach(() => localStorage.clear());

    it('should return the initial state', () => {
        expect(characteristics(undefined, {}))
            .toEqual(CharacteristicReducerMock.initialState);
    });

    it(`should handle ${ActionNames.CHARACTERISTICS_INPUT_CHANGE} [GENDER]`, () => {
        const action = characteristicsInputChange('sex', MALE);
        expect(characteristics({}, action))
            .toEqual(CharacteristicReducerMock.expectedGenderState);
    });

    it(`should handle ${ActionNames.CHARACTERISTICS_INPUT_CHANGE} [WEIGHT]`, () => {
        const action = characteristicsInputChange('weight', 70);
        expect(characteristics({}, action))
            .toEqual(CharacteristicReducerMock.expectedWeightState);
    });

    it(`should handle ${ActionNames.SUBMIT_CHARACTERISTICS} with correct data`, () => {
        const action = submitCharacteristics();
        expect(characteristics(CharacteristicReducerMock.initialSubmitState, action))
            .toEqual(CharacteristicReducerMock.expectedSubmitState);
    });

    it(`should handle ${ActionNames.SUBMIT_CHARACTERISTICS} with initial state`, () => {
        const action = submitCharacteristics();
        expect(characteristics(undefined, action))
            .toEqual(CharacteristicReducerMock.initialState);
    });
});
