/*
    This file contains functions and classes for working with
    strings.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function toCamelCase(str) { // usage: input=HelloWorld, output=helloWorld
    return str.charAt(0).toLowerCase() + str.slice(1);
}