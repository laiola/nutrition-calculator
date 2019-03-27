import { menu } from '../../../reducers/menu';
import { MenuReducerMock } from '../../mock/MenuReducerMock';

describe('Menu Reducer Test', () => {
    it('should return the initial state', () => {
        expect(menu(undefined, {}))
            .toEqual(MenuReducerMock.initialState);
    });
});
