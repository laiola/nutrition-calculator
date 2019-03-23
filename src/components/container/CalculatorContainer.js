import { connect } from 'react-redux'

import Calculator from '../tab/Calculator';
import { 
    characteristiceInputChange, 
    submitCharacteristics, 
    goalRatioInputChange, 
    submitGoalRatio,
    nutritionRatioInputChange,
    submitNutritionRatio
} from '../../actions/ActionCreator';

const mapStateToProps = state => ({
    characteristics: state.characteristics,
    goal: state.goal,
    nutrition: state.nutrition
});

const mapDispatchToProps = dispatch => ({
    handleCharacteristicsChange: 
        (inputName, inputValue) => dispatch(characteristiceInputChange(inputName, inputValue)),
    handleSubmitCharacteristics:
        characteristics => dispatch(submitCharacteristics(characteristics)),

    handleGoalRatioChange: 
        (inputName, inputValue) => dispatch(goalRatioInputChange(inputName, inputValue)),
    handleGoalRatioSubmit: 
        (goalRatio, totalIntake) => dispatch(submitGoalRatio(goalRatio, totalIntake)),

    handleNutritionChange: 
        (inputName, inputValue) => dispatch(nutritionRatioInputChange(inputName, inputValue)),
    handleNutritionSubmit: 
        (proteinRatio, fatRatio, weight, goalIntake) => 
            dispatch(submitNutritionRatio(proteinRatio, fatRatio, weight, goalIntake)),
});

export const CalculatorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
