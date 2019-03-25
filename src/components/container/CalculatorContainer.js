import { connect } from 'react-redux'

import Calculator from '../tab/Calculator';
import { 
    characteristiceInputChange, 
    submitCharacteristics, 
    submitGoalRatio,
    submitNutritionRatio
} from '../../actions/ActionCreator';

const mapStateToProps = state => ({
    characteristics: state.characteristics,
    nutrition: state.nutrition
});

const mapDispatchToProps = dispatch => ({
    handleCharacteristicsChange: 
        (inputName, inputValue) => dispatch(characteristiceInputChange(inputName, inputValue)),
   
    handleSubmitCharacteristics: () => dispatch(submitCharacteristics()),

    handleGoalRatioSubmit: 
        (goalRatio, totalIntake) => dispatch(submitGoalRatio(goalRatio, totalIntake)),

    handleNutritionSubmit: 
        (proteinRatio, fatRatio, weight) => 
            dispatch(submitNutritionRatio(proteinRatio, fatRatio, weight)),
});

export const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
