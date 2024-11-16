/*
    This file contains functions and classes for working with
    localStorage, Cookies, sessionStorage, ...
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function clearAllCookies() {
    // Get all cookies
    const cookies = document.cookie.split(";");

    // Loop through the cookies and delete each one
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

        // Set the cookie's expiration date to a time in the past
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
}

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function saveCookie(name, value, days = 1) {
    if (!name || !value) {
        console.error("could not get cookie name or cookie value. please try another way.")
        return
    }
    const date = new Date();
    date.setDate(date.getDate() + days)
    document.cookie = `${name}=${value}; expires=${date}`;
    return true
}