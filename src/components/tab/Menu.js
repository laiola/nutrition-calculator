import React, { Component }  from 'react';

import { Header } from '../header/Header';
import TempTable from '../table/TempTable';

class Menu extends Component {
    // TODO make 0
    static defaultProps = {
        goalIntake: 1500,
        protein: 70,
        fat: 50,
        carbohydrate: 150
    };
    
    render() {
        const { goalIntake, protein, fat, carbohydrate } = this.props;
        return(
            <div>
                <Header/>
                {
                    goalIntake && protein && fat && carbohydrate && <TempTable
                        goalIntake={goalIntake}
                        goalProtein={protein}
                        goalFat={fat}
                        goalCarbohydrate={carbohydrate}/>
                }
            </div>
        )
    }
}

export default Menu;
