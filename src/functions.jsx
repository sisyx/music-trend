import { notify } from "./App";
import { apiroot, root, userLevels } from "./constatnts";
import moment from "moment-jalaali";


// admins
export async function getUsers() {
    const token = getCookie("token");
    try {
        const req = await fetch(`${root}/user/getAll`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!req.ok) {
            throw new Error("failed to get all users");
        }

        const res = await req.json();
        return res.objectResult
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getAllCamps() {
    try {
        const req = await fetch(`${root}​/api/Campaign/GetAll`)

        if (!req.ok) {
            throw new Error("failed to get all camps");
        }

        console.log(req)
        const res = await req.json();
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getPagePrices(id) {
    const token = getCookie("token");
    try {
        const req = await fetch(`${root}/api/PricePage/GetPricePageByPageID?PageID=${id}`)

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();
        console.log(res);
        return [...res]
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getAllPrices () {
    const token = getCookie("token");
    try {
        const req = await fetch(`${root}/api/PricePage/GetAll`)

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();
        console.log(res);
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}


export async function getPages() {
    const token = getCookie("token");
    try {
        const req = await fetch(`${root}/api/Pages/GetAllPage`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!req.ok) {
            throw new Error("failed to get all users");
        }   
        const res = await req.json()
        console.log(res)
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}


// Logins
export function logout() {
    document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        customAlert("با موفقیت از حساب خارج شدید")
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

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }




// Campaigns

export async function createCampaign(name, type) {
    const reqBody = {
        campaignName: name,
        ownerid: 1,
        type: type === "instagram" ? "instagram" : "tel"
    }
    try {
        const req = await fetch(`${root}/api/Campaigns/CreateCampaign`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!req.ok) {
            throw new Error(await req.text());
        }

        const res = await req.json();
        return res

    } catch (error) {
        console.error(error.message);
        return error.message
    }
}

export async function getCampWithId(id) {
    const url = `${root}/api/Campaign/GetCampaignByCampID?campaignID=${id}`
    try {
        let hasCamp = true;
        const req = await fetch(url);

        if (!req.ok) {
            if (req.status !== 404) {
                throw new Error("Failed to get All camps");
            } else {
                hasCampInsta = false;
                throw new Error("error")
            }
        }

        // const res = hasCamp ? await req.json() : [];
        // const foundCampaign = res.length ? {
        //     ...res[0],
        //     pages: removeRepeats(res[0].pageId.split(",")),
        //     prices: removeRepeats(res[0].pricePageId.split(",")),
        //     startDate: toShamsi(convertDate(res[0].startDate))
        // } : []

        // console.log(foundCampaign);
        // return foundCampaign

        const res = await req.json();
        res.startDate = toShamsi(res.startDate)
        return res[0]
    } catch (error) {
        console.error(error.message)
        return {}
    }
}

// Publishers
export async function createPublisher(platformid, type, campaignId) {
    const reqBody = type === 'instagram' 
    ? {
        id: 0,
        pageId: platformid,
        postViews: 0,
        postLink: "x",
        postLikes: 0,
        postComments: 0,
        postImpertion: 0,
        storyViews: 0,
        storyImpertion: 0,
        campaignId: campaignId
    } 
    : {
        postViews: 0,
        postLink: "x",
        channelId: platformid,
        campaignId: campaignId
    }
    try {
        const req = await fetch(`${root}/api/${type === "telegram" ? "PublisherTel/CreatePublisher" : "PublisherInstagram/CreatePublisher"}`, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!req.ok) {
            throw new Error("Failed to add campaign")
        }

        const res = await req.json();
        console.log(res);
        return res.message

    } catch (error) {
        console.error(error.message);
        return error.message
    }
}

export async function getPublishers(campid) {
    console.log(campid)
    const url = `${root}​/api/Pages/GetEditedPageAndOriginalBuCampID?campaignId=${campid}`;
    try {
        const req = await fetch(url);
        if (!req.ok) {
            throw new Error(`Failed to get publisher by id ${page}`);
        }
        const res = await req.json();
        const formated = [];
        
        for (let i = 0; i < res.length; i++) {
            const currentPage = convertKeysToCamelCase(res[i]);
            currentPage.page = convertKeysToCamelCase(currentPage.page);

            const isInFormated = formated.find(fpage => fpage.page.id === currentPage.page.id)
            if (!isInFormated) {
                formated.push(currentPage)
            }
        }

        return formated
    } catch (error) {
        return []
    }
}

export async function refreshPubMetadata(pubid) {
    if (!pubid) {
        console.error("pubid is not defined.")
        return
    }

    try {
        const req = await fetch(`${root}/api/InstagramApi/ا?username=${pubid}`, {
            method: "POST"
        });

        if (!req.ok) throw new Error("Failed to update Publisher");

        const res = await req.json();
        return res;
    } catch (error) {
        console.error(error);
        return 0
    }
}


export async function getFilteredPublishers(ptype = undefined, pcat = undefined, maxp, minp) {
    const typeFiltered = [];
    const catFiltered = [];
    const priceFiltered = [];
    if (typeof(ptype) === "string") {
        try {
            const req = await fetch(`${root}/api/Pages/GetPagesByFilterType?pageTypeName=${ptype}`)
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.json();
            for (let i = 0; i < res.length; i++) {
                const tmpPage = res[i];
                typeFiltered.push(tmpPage);
            }
        } catch {}
    }

    if (typeof(pcat) === "string") {
        try {
            const req = await fetch(`${root}/api/Pages/GetPageByFilterCategory?pageCategoryName=${pcat}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.json();
            for (let i = 0; i < res.length; i++) {
                const tmpPage = res[i];
                catFiltered.push(tmpPage);
            }
        } catch {}
    }

    if (typeof(maxp) === "string" && typeof(minp) === "string") {
        const role = getRole();
        if (!role) {
            return []
        }
        // const uri = ​api​/Pages​/GetPageByFilterAllPricePage;
        try {
            const req = await fetch(`${root}​/api/Pages/GetPageByFilterAllPricePage?minPrice=${minp}&maxPrice=${maxp}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!req.ok) {
                throw new Error(req.statusText);
            }
            const res = await req.json();
            for (let i = 0; i < res.length; i++) {
                const tmpPage = res[i];
                priceFiltered.push(tmpPage);
            }
        } catch {}
    }

    const all = [...typeFiltered, ...catFiltered, ...priceFiltered];
    all.reduce((acc, cur) => !!acc.find(xcur => xcur.id === cur.id) ? acc : [...acc, cur], []);

    return all;
}

export async function updatePublisher(publisherId, newData, type) {
    let url;
    if (type === "instagram") {
        url = `${root}/api/PublisherInstagram/${publisherId}`
    } else {
        url = `${root}/api/PublisherTel/${publisherId}`
    }

    try {
        const req = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!req.ok) {
            throw new Error("Failed to edit Publisher")
        }

        const res = await req.json();
        return res
    } catch (error) {
        console.log(error.message);
        return "مشکلی در ادیت کردن پابلیشر ایجاد شده. لطفا دوباره امتحان کنید"
    }
}

export async function getPageTypes() {
    const token = getCookie ("token");
    try {
        const req = await fetch(`${root}/api/PageType/GetAll`)

        if (!req.ok) {
            throw new Error(req.statusText);
        }

        const res = await req.json();
        return res
    } catch (error) {
        console.error(error);
        return []
    }
}

export async function getPageCategories() {
    const token = getCookie ("token");
    try {
        const req = await fetch(`${root}/api/PageTypeCategory/GetAll`, {
            headers: {
                "Autherization": `Bearer ${token}`
            }
        })

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();
        return res
    } catch (error) {
        console.error(error);

        return []
    }
}


// instagram and telegram apis

export async function getInstaUser(username) {
    try {
        const req = await fetch(`${apiroot}/api/instagram/GetBusinessDiscoveryData?username=${username}`);
        
        if (!req.ok) {
            throw new Error("failed to fetch data from instagram");
        }

        const res = await req.json();
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
        return {}
    }
}

export async function getTelegramChannel(channelId) {
    try {
        const req = await fetch(`${apiroot}/api/Telegram/GetChannelProfilePhoto/@${channelId}`);
        
        if (!req.ok) {
            throw new Error("failed to fetch data from telegram");
        }

        const res = await req.json();
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
        return {}
    }
}


// ui scripts
export async function customAlert(text) {
    notify(text);
}


// other functions
export function copy() {
const reportText = "در کلیپ برد کپی شد";
customAlert(reportText)
}

export function saveCookie(name, value, days = 1) {
    if (!name || !value) {
        console.error("could not get cookie name or cookie value. please try another way.")
        return
    }

    console.log(value)
    const date = new Date();
    date.setDate(date.getDate() + days)

    document.cookie = `${name}=${value}; expires=${date}`;

    return true
}

function removeRepeats(lst) {
    const resultList = [];;
    lst.forEach(item => {
        if (!resultList.includes(item)) {
            resultList.push(item);
        }
    })

    return resultList
}

function convertDate(dateString) {
    // Create a Date object from the input string
    const date = new Date(dateString);
    
    // Get the month and year
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = date.getFullYear();
    const day = date.getDay();
    
    // Format the output as M/YYYY
    return `${year}/${month}/${day}`;
}

export function toShamsi(dateString) {
    // Convert to Shamsi (Jalali) date
    const shamsiDate = moment(dateString, 'YYYY/MM/DD').format('jYYYY/jMM/jDD');

    // console.log(shamsiDate); // Output will be in Shamsi format

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

function clearAllCookies() {
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

export function toPersianUnits(num) {
    // if (num >= 1000000) {
    //     return (num / 1000000).toFixed(0) + ' میلیون';
    // } else if (num >= 1000) {
    //     return (num / 1000).toFixed(0) + ' هزار';
    // } else {
    //     return num.toString();
    // }

    let result = '';

    if (num >= 1000000) {
        const millions = Math.floor(num / 1000000);
        result += millions + ' میلیون';
        num %= 1000000; // باقی‌مانده بعد از محاسبه میلیون‌ها
    }

    if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        if (result) result += ' و '; // اگر قبلاً میلیون‌ها وجود دارد، "و" اضافه می‌کنیم
        result += thousands + ' هزار';
        num %= 1000; // باقی‌مانده بعد از محاسبه هزارها
    }

    if (num > 0) {
        if (result) result += ' و '; // اگر قبلاً میلیون‌ها یا هزارها وجود دارد، "و" اضافه می‌کنیم
        result += num; // عدد باقی‌مانده را اضافه می‌کنیم
    }

    return result || '0'; // اگر هیچ عددی وجود نداشت، 0 را برمی‌گردانیم
}

function findSimilarItems(list1, list2) {
    // Create a Set to store the IDs from the first list for quick lookup
    const idsSet = new Set(list1.map(item => item.id));
    
    // Filter the second list to find items with matching IDs
    const similarItems = list2.filter(item => idsSet.has(item.id));
    
    return similarItems;
}

function toCamelCase(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function convertKeysToCamelCase(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelCaseKey = toCamelCase(key);
            newObj[camelCaseKey] = obj[key];
        }
    }
    return newObj;
}