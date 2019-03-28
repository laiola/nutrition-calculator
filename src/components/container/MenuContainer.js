import { connect } from 'react-redux';
import { Menu } from '../tab/Menu';
import { addRowToMenu, changeRow } from '../../actions/ActionCreator';

const mapStateToProps = state => {
    return {
        goalNutrition: state.nutrition,
        menu: state.menu
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
