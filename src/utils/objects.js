/*
    This file contains functions and classes for working with
    objects.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

import { toCamelCase } from "./strings";

export function convertKeysToCamelCase(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelCaseKey = toCamelCase(key);
            newObj[camelCaseKey] = obj[key];
        }
    }
    return newObj;
}