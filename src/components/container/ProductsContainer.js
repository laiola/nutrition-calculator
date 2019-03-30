import { connect } from 'react-redux';

import { Products } from '../tab/Products';
import { deleteProduct, submitProduct } from '../../actions/ActionCreator';

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    onSubmit:
        (productIndex, product) => dispatch(submitProduct(productIndex, product)),
    onDelete:
        productIndex => dispatch(deleteProduct(productIndex)),
});

export const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);
