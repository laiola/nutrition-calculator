import { SexCoefficient, FEMALE } from "../constant/Sex";
import { ActivityCoefficient, NORMAL_ACTIVITY } from "../constant/Activity";

const WEIGHT_COEF = 10;
const HEIGHT_COEF = 6.25;
const AGE_COEF = 5;

const calculateBMR = (weight, height, age, sex = FEMALE) =>
    WEIGHT_COEF * weight 
    + HEIGHT_COEF * height 
    + AGE_COEF * age
    + SexCoefficient[sex];

export const calculateTotalIntake = ({ weight, height, age, sex, activity = NORMAL_ACTIVITY}) => 
    ActivityCoefficient[activity] * calculateBMR(weight, height, age, sex);

export const calculateMacronutrient = ({ goalIntake, weight, fatRatio, proteinRatio}) => {
    const fat = Math.round(weight * fatRatio);
    const protein = Math.round(weight * proteinRatio);
    const carbohydrate = Math.round((goalIntake - fat * 9 - protein * 4) / 4);

    return {
        fat,
        protein,
        carbohydrate
    }
};

export const calculateNutritionByWeight = product => {
    const newProduct = {...product};
    const weightCoef = product.weight / 100;

    newProduct.protein = weightCoef * product.proteinPer;
    newProduct.fat = weightCoef * product.fatPer;
    newProduct.carbohydrate = weightCoef * product.carbohydratePer;
    newProduct.calorie = weightCoef * product.caloriePer;

    return newProduct;
}
