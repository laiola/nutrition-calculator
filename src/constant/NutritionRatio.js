const RECOMMENDED_PROTEIN_RATIO_COEF = 1;
const NORMAL_PROTEIN_RATIO_COEF = 1.25;
const HIGH_PROTEIN_RATIO_COEF = 1.5;
const VERY_HIGH_PROTEIN_RATIO_COEF = 1.75;
const EXTREME_PROTEIN_RATIO_COEF = 2;

export const ProteinRatio = Object.freeze({
    RECOMMENDED_PROTEIN_RATIO : RECOMMENDED_PROTEIN_RATIO_COEF, 
    NORMAL_PROTEIN_RATIO : NORMAL_PROTEIN_RATIO_COEF, 
    HIGH_PROTEIN_RATIO : HIGH_PROTEIN_RATIO_COEF, 
    VERY_HIGH_PROTEIN_RATIO : VERY_HIGH_PROTEIN_RATIO_COEF, 
    EXTREME_PROTEIN_RATIO : EXTREME_PROTEIN_RATIO_COEF, 
});

const LOW_FAT_RATIO_COEF = 0.8;
const NORMAL_FAT_RATIO_COEF = 1;
const HIGH_FAT_RATIO_COEF = 1.2;

export const FatRatio = Object.freeze({
    LOW_FAT_RATIO : LOW_FAT_RATIO_COEF, 
    RECOMMENDED_FAT_RATIO : NORMAL_FAT_RATIO_COEF, 
    HIGH_FAT_RATIO : HIGH_FAT_RATIO_COEF, 
});