/*
    This file contains functions and classes for working with
    numbers.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function toKFormat(num) { // usage: input=1532, output=1.5K
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num;
    }
}

export function toPercentFormat(num) { // usage: inpu=0.5686461313, output=56.00%
    return (num * 100).toFixed(2) + '%';
}

export function toPersianUnits(num) {
    let result = '';

    if (num >= 1000000) {
        const millions = Math.floor(num / 1000000);
        result += millions + ' میلیون';
        num %= 1000000; // remainder of counting Millions
    }

    if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        if (result) result += ' و '; // add "و" if there was Millions before
        result += thousands + ' هزار';
        num %= 1000; // // remainder of dividing to 1K
    }

    if (num > 0) {
        if (result) result += ' و '; // add "و" if there was Millions or Thousands
        result += num; // add the remainder
    }

    return result || '0'; // return 0 if no number existed
}

export function toPersianNumbers(digit) {
    const dict = {
        "1": "۱",
        "2": "۲",
        "3": "۳",
        "4": "۴",
        "5": "۵",
        "6": "۶",
        "7": "۷",
        "8": "۸",
        "9": "۹",
        "0": "۰",
    }

    return dict[digit]
}
