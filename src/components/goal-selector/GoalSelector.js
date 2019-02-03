import React from 'react';

const goals = [
    {key: 0.75, value: 'Lose weight (25%)'},
    {key: 0.80, value: 'Lose weight (20%)'},
    {key: 0.85, value: 'Lose weight (15%)'},
    {key: 1, value: 'Keep weight'},
    {key: 1.15, value: 'Gain weight (15%)'},
    {key: 1.20, value: 'Gain weight (20%)'},
    {key: 1.25, value: 'Gain weight (25%)'},
];

export const GoalSelector = props => {
    return (
        <div className="goal-selector">
            <form onSubmit={props.handleSubmit}>
                <label>
                    Select your goal:
                    <select onChange={props.handleChange} name="goal">
                        {
                            goals.map((value, i) => 
                                <option key={i} value={value.key}>{value.value}</option>
                            )
                        }
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};
