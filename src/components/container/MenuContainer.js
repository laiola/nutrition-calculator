import { connect } from 'react-redux';
import { Menu } from '../tab/Menu';
import { addRowToMenu, changeRow } from '../../actions/ActionCreator';

const mapStateToProps = state => {
    const { goalIntake, protein: goalProtein, fat: goalFat, carbohydrate: goalCarbohydrate } = state.nutrition;
    const { rows, protein, fat, carbohydrate, calorie } = state.menu;
    return {
        goalIntake,
        goalProtein,
        goalFat,
        goalCarbohydrate,
        rows,
        protein,
        fat,
        carbohydrate,
        calorie
    }
};

const mapDispatchToProps = dispatch => ({
    onAddRow:
        row => dispatch(addRowToMenu(row)),
    onChangeRow:
        (rowIndex, inputName, inputValue) => dispatch(changeRow(rowIndex, inputName, inputValue)),
});

export const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
