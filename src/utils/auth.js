/*
    this file is temprary located in this folder.
    here are some functions for login, logout, getting user information and etc.
    but anyway, this file must be in another folder.
*/

import { customAlert } from "../functions";
import { clearAllCookies, getCookie } from "../lib/cacheAndStorage";

export function logout() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        customAlert("با موفقیت از حساب خارج شدید", "success")
    });

    clearAllCookies()
}

export function isLoggedin() {
    const token = getCookie("token")
    console.log("token is " + token)
    return !!token
}

export function getUser() {
    if (!isLoggedin) return undefined
    const username = getCookie("username");

    return username
}

export function getRole() {
    if (!isLoggedin) return undefined
    const role = getCookie("role");

    return role
}