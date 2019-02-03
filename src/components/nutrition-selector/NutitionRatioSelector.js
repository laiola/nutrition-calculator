import React from 'react';
import { ProteinRatio, FatRatio} from '../../constant/NutritionRatio';

export const NutitionRatioSelector = props => {
    return (
        <div className="nutrition-ratio-selector">
            <form onSubmit={props.handleSubmit}>
                <label>
                    Pick protein weight per kilogram of your weight:
                    <select value={props.proteinRatio} onChange={props.handleChange} name="proteinRatio">
                        {
                            Object.values(ProteinRatio).map((value, i) => 
                                <option key={i} value={value}>{value}</option>
                            )
                        }
                    </select>
                </label>
                <label>
                    Pick fat weight per kilogram of your weight:
                    <select value={props.fatRatio} onChange={props.handleChange} name="fatRatio">
                        {
                            Object.values(FatRatio).map((value, i) => 
                                <option key={i} value={value}>{value}</option>
                            )
                        }
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};
