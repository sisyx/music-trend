/*
    This file contains functions and classes for working with
    arrays and lists.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function findCommonElement(array1, array2) {
    // Loop for array1
    for (let i = 0; i < array1.length; i++) {
        // Loop for array2
        for (let j = 0; j < array2.length; j++) {
            // Compare the element of each and every element from both of the arrays
            if (array1[i] === array2[j]) {
                // Return if common element found
                return true;
            }
        }
    }
    // Return if no common element exist
    return false;
}

export function removeRepeats(lst) {
    const resultList = [];;
    lst.forEach(item => {
        // check if the item is repeated
        if (!resultList.includes(item)) {
            // add item to resultList if it is not in it
            resultList.push(item);
        }
    })

    return resultList
}