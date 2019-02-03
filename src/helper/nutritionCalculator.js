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

export const calculateTotalIntake = (weight, height, age, sex, activity = NORMAL_ACTIVITY) => 
    ActivityCoefficient[activity] * calculateBMR(weight, height, age, sex);
