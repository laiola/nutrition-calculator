export const storeObject = (key, storedObject) =>
    localStorage.setItem(key, JSON.stringify(storedObject));

export const get = key => JSON.parse(localStorage.getItem(key));

export const getOrDefault = (key, defaultValue) => {
    const parsedValue = JSON.parse(localStorage.getItem(key));

    return isNotEmptyObject(parsedValue)
        ? parsedValue
        : defaultValue;
};

export const CHARACTERISTIC_KEY = 'characteristics';
export const NUTRITION_KEY = 'nutrition';

const isNotEmptyObject = obj => obj && !Object.keys(obj).length;
