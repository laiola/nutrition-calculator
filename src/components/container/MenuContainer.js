import { connect } from 'react-redux';
import { Menu } from '../tab/Menu';
import { addRowToMenu, calculateNutrition, changeRow, deleteMenuRow } from '../../actions/ActionCreator';

const mapStateToProps = state => ({
    goalNutrition: state.nutrition,
    menu: state.menu
});

const mapDispatchToProps = dispatch => ({
    onAddRow:
        row => dispatch(addRowToMenu(row)),
    onDeleteRow:
        rowIndex => dispatch(deleteMenuRow(rowIndex)),
    onChangeRow:
        (rowIndex, inputName, inputValue) => dispatch(changeRow(rowIndex, inputName, inputValue)),
    updateNutrition:
        () => dispatch(calculateNutrition()),
});

export const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
