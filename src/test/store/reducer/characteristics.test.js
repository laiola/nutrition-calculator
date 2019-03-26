import { ActionNames } from '../../../constant/ActionName';
import { characteristicsInputChange } from '../../../actions/ActionCreator';
import { MALE } from '../../../constant/Sex';
import { characteristics } from '../../../reducers/characteristics';

describe('Characteristic Reducer', () => {
    it(`${ActionNames.CHARACTERISTICS_INPUT_CHANGE} GENDER success`, () => {
        const expected = {
            sex: MALE,
        }

        const initialState = {};
        const action = characteristicsInputChange('sex', MALE);

        const actual = characteristics(initialState, action);
        
        expect(actual).toEqual(expected);
    });

    it(`${ActionNames.CHARACTERISTICS_INPUT_CHANGE} WEIGHT success`, () => {

    });

    it(`${ActionNames.SUBMIT_CHARACTERISTICS} success`, () => {

    });
});
