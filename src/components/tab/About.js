import React from 'react';

import { Header } from '../header/Header';

import './About.css';

const BMR_HEADERS = ['Sex', 'BMR'];
const BMR_ROWS = [
    ['Men', 'BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5'],
    ['Women', 'BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161']
];

const TOTAL_INTAKE_HEADERS = ['Lifestyle', 'Example', 'PAL', 'Calculation'];
const TOTAL_INTAKE_ROWS = [
    ['No activity', 'No any sport activities per week', '1.2', 'BMR x 1.2'],
    ['Low activity', '1 - 3 workouts by 30 minutes per week', '1.375', 'BMR x 1.375'],
    ['Sedentary or light activity', '3 - 5 workouts by 30 minutes per week', '1.53', 'BMR x 1.53'],
    ['Active or moderately active', 'Construction worker or person running one hour daily', '1.76', 'BMR x 1.76'],
    ['Vigorously active', 'Agricultural worker (non mechanized) or person swimming two hours daily', '2.25', 'BMR x 2.25']
];

const FAT = 'weight x fatRatio';
const PROTEIN = 'weight x proteinRatio';
const CARBOHYDRATE = '(goalIntake - fat * 9 - protein * 4)/4';

const NUTRITION_HEADERS = ['Nutrient', 'RDI'];
const NUTRITION_ROWS = [
    ['Total Protein', PROTEIN],
    ['Total Fat', FAT],
    ['Total Carbohydrate', CARBOHYDRATE]
];

export const About = () => (
    <div>
        <Header/>
        <div className="about">
            <div className="paragraph">
                <h4 className="text-primary">Nutrition Calculator</h4>
                <p>
                    The project is a simple nutrition calculator that using <a
                    href={"https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation"}>Harris–Benedict
                    equation</a> revised by Mifflin and St Jeor.
                </p>
            </div>
            <h5 className="text-primary">Step 1. Individual's basal metabolic rate (BMR)</h5>
            <div className="paragraph">
                <ConstTable headers={BMR_HEADERS} rows={BMR_ROWS}/>
            </div>

            <h5 className="text-primary">Step 2. Total Intake</h5>
            <div className="paragraph">
                <ConstTable headers={TOTAL_INTAKE_HEADERS} rows={TOTAL_INTAKE_ROWS}/>
            </div>

            <h5 className="text-primary">Step 3. Reference Daily Intake</h5>
            <div className="paragraph">
                <ConstTable headers={NUTRITION_HEADERS} rows={NUTRITION_ROWS}/>
            </div>

            <h5 className="text-primary">Nutrition Recommendations</h5>
            <div className="paragraph">
                <ul className="tips-list">
                    <li>
                        Energy intake (calories) should be in balance with energy expenditure. To avoid
                        unhealthy
                        weight gain, total fat should not exceed 30% of total energy intake. Intake of saturated
                        fats should be less than 10% of total energy intake, and intake of trans-fats less than
                        1% of total energy intake, with a shift in fat consumption away from saturated fats and
                        trans-fats to unsaturated fats, and towards the goal of eliminating
                        industrially-produced
                        trans-fats.
                    </li>
                    <li>
                        Limiting intake of free sugars to less than 10% of total energy intake is part of a
                        healthy
                        diet. A further reduction to less than 5% of total energy intake is suggested for
                        additional
                        health benefits.
                    </li>
                    <li>
                        Keeping salt intake to less than 5 g per day (equivalent to sodium intake of less than 2
                        g
                        per day) helps to prevent hypertension, and reduces the risk of heart disease and stroke
                        in the adult population.
                    </li>
                </ul>

                <a href="https://www.who.int/health-topics/news-room/fact-sheets/detail/healthy-diet">More
                    recommendations</a>
            </div>
        </div>
    </div>
);

const ConstTable = ({ headers, rows }) => (
    <table className="const-table">
        <thead>
        <tr>
            {
                headers.map((header, i) =>
                    <th key={i} className="lead">{header}</th>
                )
            }
        </tr>
        </thead>
        <tbody>
        {
            rows.map((row, i) =>
                <tr key={i}>
                    {
                        row.map((cell, j) =>
                            <td key={j}>{cell}</td>
                        )
                    }
                </tr>
            )
        }
        </tbody>
    </table>
);
