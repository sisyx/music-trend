/*
    This file contains functions and classes for working with
    time and dates.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
    * 
    * for some functions "moment-jalaali ^0.10.1" most be installed already
*/

import moment from "moment-jalaali";

export function toShamsi(dateString) {
    // Convert to Shamsi (Jalali) date
    const shamsiDate = moment(dateString, 'YYYY/MM/DD').format('jYYYY/jMM/jDD');

    const monthNames = [
        "فروردین",
        "اریبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];

    const tmp = shamsiDate.split("/").slice(0, 2);
    console.log(tmp)
    const formated = `${monthNames[tmp[1] - 1]} ${tmp[0]}`

    return formated;
}