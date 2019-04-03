import React, { Component } from 'react';

import { Header } from '../header/Header';
import MathJax from 'react-mathjax2'

import './About.css';

const BMR_EQUATION = 'P = \\left ( \\frac {10.0 m} {1 ~ \\mbox {kg}} + \\frac {6.25 h} {1 ~ \\mbox {cm}} - \\frac {5.0 a} {1 ~ \\mbox {year}} + s \\right ) \\frac {\\mbox {kcal}} {\\mbox {day}}';
const TOTAL_INTAKE = 'goalIntake = a * BMR';
const NUTRITION = `\\begin{cases}
fat = weight * fatRatio\\\\
protein = weight * ProteinRatio\\\\
carbohydrate = \\frac{goalIntake - fat * 9 - protein * 4}{4}
\\end{cases}`; 

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="about">
                    <h5 className="text-primary">Step 1. Calculate your basal metabolic rate(BMR)</h5>
                    <p className="lead">
                        The Mifflin St Jeor Equation:
                    </p>
                    <div className="paragraph">
                        <MathJax.Context input='tex'>
                            <div>
                                <MathJax.Node inline>{BMR_EQUATION}</MathJax.Node>
                                , where s is +5 for males and −161 for females.
                            </div>
                        </MathJax.Context>
                    </div>

                    <h5 className="text-primary">Step 2. Calculate your total intake</h5>
                    <div className="paragraph">
                        <MathJax.Context input='tex'>
                            <div>
                                <MathJax.Node inline>{TOTAL_INTAKE}</MathJax.Node>
                                , where a is your activity coefficient.
                            </div>
                        </MathJax.Context>
                    </div>

                    <h5 className="text-primary">Step 3. Calculate your nutrition</h5>
                    <div className="paragraph">
                        <MathJax.Context input='tex'>
                            <div>
                                <MathJax.Node inline>{NUTRITION}</MathJax.Node>
                            </div>
                        </MathJax.Context>
                        <div>
                            We recommend to use at least 1 gr fat per 1 kg weight,
                            and doesn't use more then 1.5 gr protein per 1 kg weight.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
