import { connect } from 'react-redux';
import { Menu } from '../tab/Menu';

const mapStateToProps = state => {
    const { goalIntake, protein, fat, carbohydrate } = state.nutrition;
    return {
        goalIntake,
        protein,
        fat,
        carbohydrate,
    }
};

const mapDispatchToProps = dispatch => ({});

export const MenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
