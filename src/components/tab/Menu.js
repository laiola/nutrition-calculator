import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header/Header';
import MenuTable from '../table/MenuTable';

export const Menu = ({ goalNutrition, menu, onAddRow, onChangeRow, updateNutrition, onDeleteRow }) => {
    const { goalIntake, protein: goalProtein, fat: goalFat, carbohydrate: goalCarbohydrate } = goalNutrition;
    const { rows, protein, fat, carbohydrate, calorie } = menu;
    return (
        <div>
            <Header/>
            <MenuTable
                goalIntake={goalIntake}
                goalProtein={goalProtein}
                goalFat={goalFat}
                goalCarbohydrate={goalCarbohydrate}
                rows={rows}
                protein={protein}
                fat={fat}
                carbohydrate={carbohydrate}
                calorie={calorie}
                onAddRow={onAddRow}
                onChangeRow={onChangeRow}
                updateNutrition={updateNutrition}
                onDeleteRow={onDeleteRow}
            />
        </div>
    );
};

Menu.propTypes = {
    goalNutrition: PropTypes.object.isRequired,
    menu: PropTypes.object.isRequired,
    onAddRow: PropTypes.func.isRequired,
    onChangeRow: PropTypes.func.isRequired,
    updateNutrition: PropTypes.func.isRequired,
    onDeleteRow: PropTypes.func.isRequired
};
