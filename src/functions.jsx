import { apiroot, root } from "./constatnts";
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
    });
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
    const url = `${root}​/api/Pages/GetPageVersionByCampID?campaignId=${campid}`;
    try {
        const req = await fetch(url);
        if (!req.ok) {
            throw new Error(`Failed to get publisher by id ${page}`);
        }
        const res = await req.json();
        const formated = [];
        
        for (let i = 0; i < res.length; i++) {
            const currentPage = res[i];

            const isInFormated = formated.find(fpage => fpage.page.id === currentPage.page.id)
            console.log("isInFormated: ", isInFormated)
            if (!isInFormated) {
                formated.push(currentPage)
            }
        }

        return formated
    } catch (error) {
        return []
    }
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
    // remove previous alerts
    document.querySelectorAll(".sisyx-own-custom-alert").forEach(xalert => xalert.remove());
    const alertHeader = document.createElement("div");
    alertHeader.classList = "text-red-400 w-full text-right"
    alertHeader.innerHTML = "پیام سیستم"
    const div = document.createElement("div");
    // tailwind classes
    div.classList = "sisyx-own-custom-alert fixed bg-black text-white bottom-3 right-3 p-2 flex flex-col gap-2";
    
    // append elements to document
    div.appendChild(alertHeader)
    div.innerHTML += text;
    document.body.appendChild(div);

    const alertElement = document.querySelector(".sisyx-own-custom-alert");
    setTimeout(() => {
        alertElement.remove();
    }, 5000);
}


// other functions
export function copy(text) {
const reportText = `<div dir="rtl" class="flex gap-2 items-center">
        <code class="font-bold text-red" dir="ltr">
            ${text.slice(0, 30)}${text.length > 30 ? "..." : ""} 
        </code>
        در کلیپ برد کپی شد</div>`;
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