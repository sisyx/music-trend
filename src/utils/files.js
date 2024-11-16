/*
    This file contains functions and classes for working with
    files.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function getFileExtension(filename) {
    const lastDotIndex = filename.lastIndexOf('.');
    const fileExtension = filename.slice(lastDotIndex);
    return fileExtension; 
}