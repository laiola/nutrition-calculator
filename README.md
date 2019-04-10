# Nutrition Calculator
The project is a simple nutrition calculator that using [Harris–Benedict equation](https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation) revised by Mifflin and St Jeor.

## Step 1. Individual's basal metabolic rate (BMR)

Sex | BMR
--- | ---
Men | BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
Women | BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

## Step 2. Total Intake

Lifestyle | Example | PAL | Calculation
--- | --- | --- | --- 
No activity  | No any sport activities per week | 1.2 | BMR x 1.2
Low activity  | 1 - 3 workouts by 30 minutes per week | 1.375 | BMR x 1.375
Sedentary or light activity | 3 - 5 workouts by 30 minutes per week | 1.53 | BMR x 1.53
Active or moderately active | Construction worker or person running one hour daily | 1.76 | BMR x 1.76
Vigorously active | Agricultural worker (non mechanized) or person swimming two hours daily | 2.25 | BMR x 2.25

# Available Scripts

In the project directory, you can run:

### `npm install`

Install all required dependencies.

### `npm start`

Runs the project in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm tests`

Launches the test runner in the interactive watch mode.<br>

# Demo
To view project open [Nutrition_Calculator](https://laiola.github.io/nutrition-calculator).
