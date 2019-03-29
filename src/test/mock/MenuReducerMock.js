import { initialMenuState } from '../../reducers/menu';
import { initialRow } from '../../components/table/TempTable';

export const MenuReducerMock = {
    initialState: {
        ...initialMenuState
    },
    initialRow: {
        ...initialRow
    },
    productRow: {
        'title': 'test',
        'weight': 1000,
        'protein': 20,
        'fat': 20,
        'carbohydrate': 20,
        'calorie': 20,
        'proteinPer': 2,
        'fatPer': 2,
        'carbohydratePer': 2,
        'caloriePer': 2
    },
    stateWithRowDefaultNutrition: {
        rows: [{
            'title': 'test',
            'weight': 1000,
            'protein': 20,
            'fat': 20,
            'carbohydrate': 20,
            'calorie': 20,
            'proteinPer': 2,
            'fatPer': 2,
            'carbohydratePer': 2,
            'caloriePer': 2
        }],
        protein: 0,
        fat: 0,
        carbohydrate: 0,
        calorie: 0
    }
};
