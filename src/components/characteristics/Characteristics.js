import React from 'react';
import { MALE, FEMALE } from '../../constant/Sex';
import { NORMAL_ACTIVITY, NO_ACTIVITY, LOW_ACTIVITY, HIGH_ACTIVITY, EXTREME_ACTIVITY } from '../../constant/Activity';

export const Characteristics = props => {
    const { handleChange } = props;
    
    return (
        <div className="characteristics">
            <form onSubmit={props.handleSubmit}>
                <label>
                    Pick your sex:
                    <select value={props.sex} onChange={handleChange} name="sex">
                        <option value={MALE}>Male</option>
                        <option value={FEMALE}>Female</option>
                    </select>
                </label>
                <div>
                    <label>
                        Weight in kg:
                        <input type="number" step="1" name="weight" onChange={handleChange} />
                    </label>
                    <label>
                        Height in cm:
                        <input type="number" step="1" name="height" onChange={handleChange} />
                    </label>
                    <label>
                        Age in years:
                        <input type="number" step="1" name="age" onChange={handleChange} />
                    </label>
                </div>
                <label>
                    Pick your lifestyle:
                    <select value={props.activity} onChange={handleChange} name="activity">
                        <option value={NO_ACTIVITY}>No activity</option>
                        <option value={LOW_ACTIVITY}>Low activity</option>
                        <option value={NORMAL_ACTIVITY}>Normal activity</option>
                        <option value={HIGH_ACTIVITY}>High activity</option>
                        <option value={EXTREME_ACTIVITY}>Extreme activity</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};
