import { FEMALE, SexCoefficient } from '../constant/Sex';
import { ActivityCoefficient, NORMAL_ACTIVITY } from '../constant/Activity';

const WEIGHT_COEF = 10;
const HEIGHT_COEF = 6.25;
const AGE_COEF = 5;
const DEFAULT_BMR = 0;

const calculateBMR = (weight, height, age, sex = FEMALE) =>
    (weight && height && age)
        ? WEIGHT_COEF * weight
        + HEIGHT_COEF * height
        + AGE_COEF * age
        + SexCoefficient[sex]
        : DEFAULT_BMR;

export const calculateTotalIntake = ({ weight, height, age, sex, activity = NORMAL_ACTIVITY }) =>
    ActivityCoefficient[activity] * calculateBMR(weight, height, age, sex);

export const calculateMacronutrient = (goalIntake, weight, fatRatio, proteinRatio) => {
    if (goalIntake && weight && fatRatio && proteinRatio) {
        const fat = Math.round(weight * fatRatio);
        const protein = Math.round(weight * proteinRatio);
        const carbohydrate = Math.round((goalIntake - fat * 9 - protein * 4) / 4);

        return {
            fat,
            protein,
            carbohydrate
        }
    }
};

export const calculateNutritionByWeight = product => {
    const newProduct = { ...product };
    const weightCoef = product.weight / 100;

    newProduct.protein = Math.round(weightCoef * product.proteinPer * 100) / 100;
    newProduct.fat = Math.round(weightCoef * product.fatPer * 100) / 100;
    newProduct.carbohydrate = Math.round(weightCoef * product.carbohydratePer * 100) / 100;
    newProduct.calorie = Math.round(weightCoef * product.caloriePer * 100) / 100;

    return newProduct;
};
