import { FEMALE, MALE } from '../../constant/Sex';
import { NORMAL_ACTIVITY } from '../../constant/Activity';
import { initialCharacteristicsState } from '../../reducers/characteristics';

export const CharacteristicReducerMock = {
    expectedGenderState: {
        sex: MALE,
    },
    expectedWeightState: {
        weight: 70,
    },
    expectedSubmitState: {
        weight: 70,
        height: 100,
        age: 20,
        sex: FEMALE,
        activity: NORMAL_ACTIVITY,
        totalIntake: 1933.92,
    },
    initialState: {
        ...initialCharacteristicsState
    },
    initialSubmitState: {
        weight: 70,
        height: 100,
        age: 20,
        sex: FEMALE,
        activity: NORMAL_ACTIVITY,
    },
};
