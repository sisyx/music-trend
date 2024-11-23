import { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";
import { getCookie } from "../lib/cacheAndStorage";
import { customAlert } from "../functions";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

function useFetch(url = BASE_URL, {contentType = "application/json", reload, getAs = "json", alertOnError = "", alertOnSuccess = "", needsToken = false}) {
    const [state, setState] = useState({error: false, loading: true, data: {}});
    const navigate = useNavigate();

    async function init() {
        const token = getCookie("token");
        if (needsToken && !token) {
            console.error(`token ${token} is NOT valid`);
            customAlert("خطا در تایید کاربر.");
            logout();
            setState({loading: false, error: true, data: {message: "نیاز دوباره به ورود به حساب", callback: () => navigate("/login") }})
            return
        }
        try {
            const req = await fetch(`${BASE_URL}${url}`, {
                headers:{
                    "Content-Type": contentType,
                }
            });
            if (!req.ok) throw new Error(req.statusText);
            const res = await req.json() || await req.text();
            if (alertOnSuccess) customAlert(alertOnSuccess)
            setState({error: false, loading: false, data: res});
        } catch (error) {
            console.error(error.message);
            if (alertOnError) customAlert(alertOnError);
            customAlert(alertOnError);
            setState({loading: false, error: true, data: {message: error.message}})
        }
    }

    useEffect(() => {init()}, [reload]);

    return state;
}

export default useFetch;