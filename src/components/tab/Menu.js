import React from 'react';

import { Header } from '../header/Header';
import TempTable from '../table/TempTable';

export const Menu = ({ goalIntake, protein, fat, carbohydrate }) => {
    return (
        <div>
            <Header/>
            <TempTable
                goalIntake={goalIntake}
                goalProtein={protein}
                goalFat={fat}
                goalCarbohydrate={carbohydrate}/>
        </div>
    );
};
