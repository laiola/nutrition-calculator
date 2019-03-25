export const storeObject = (key, storedObject) => 
    localStorage.setItem(key, JSON.stringify(storedObject));

export const get = key => JSON.parse(localStorage.getItem(key));

export const getOrDefault = (key, defaultValue) => 
    JSON.parse(localStorage.getItem(key)) || defaultValue;


export const CHARACTERISTIC_KEY = 'characteristics';
export const NUTRITION_KEY = 'nutrition';
