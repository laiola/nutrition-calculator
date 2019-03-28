import React from 'react';

import { Header } from '../header/Header';
import TempTable from '../table/TempTable';

export const Menu = ({ goalNutrition, menu, onAddRow, onChangeRow }) => {
    const { goalIntake, protein: goalProtein, fat: goalFat, carbohydrate: goalCarbohydrate } = goalNutrition;
    const { rows, protein, fat, carbohydrate, calorie } = menu;
    return (
        <div>
            <Header/>
            <TempTable
                goalIntake={goalProtein}
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
            />
        </div>
    );
};
