import { notify } from "./App";
import { FILES_BASE, GENDERS } from "./constatnts";
import { getFileExtension, getFileType } from "./utils/files";
import { convertKeysToCamelCase } from "./utils/objects";
import { toShamsi } from "./lib/timeAndDates";
import { getCookie } from "./lib/cacheAndStorage";
import { BASE_URL } from "./config/config";


// admins
export async function getUsers() {
    const token = getCookie("token");
    try {
        const req = await fetch(`${BASE_URL}/user/getAll`, {
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
        const req = await fetch(`${BASE_URL}​/api/Campaign/GetAll`)

        if (!req.ok) {
            throw new Error("failed to get all camps");
        }

        const res = await req.json();
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getPagePrices(id) {
    try {
        const req = await fetch(`${BASE_URL}/api/PricePage/GetPricePageByPageID?PageID=${id}`)

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();
        return [...res]
    } catch (error) {
        console.error(error)
        return []
    }
}

export async function getAllPrices () {
    try {
        const req = await fetch(`${BASE_URL}/api/PricePage/GetAll`)

        if (!req.ok) {
            throw new Error(req.statusText)
        }

        const res = await req.json();
        return res
    } catch (error) {
        console.error(error)
        return []
    }
}


export async function getPages() {
    const token = getCookie("token");
    try {
        const req = await fetch(`${BASE_URL}/api/Pages/GetAllPageAndAllPricePage`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if (!req.ok) {
            throw new Error("failed to get all users");
        }   
        const res = await req.json()
        return res.pages
    } catch (error) {
        console.error(error)
        return []
    }
}

// Campaigns

export async function createCampaign(name, type) {
    const reqBody = {
        campaignName: name,
        ownerid: 1,
        type: type === "instagram" ? "instagram" : "tel"
    }
    try {
        const req = await fetch(`${BASE_URL}/api/Campaigns/CreateCampaign`, {
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
    const url = `${BASE_URL}/api/Campaign/GetCampaignByCampID?campaignID=${id}`
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
        const req = await fetch(`${BASE_URL}/api/${type === "telegram" ? "PublisherTel/CreatePublisher" : "PublisherInstagram/CreatePublisher"}`, {
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
        return res.message

    } catch (error) {
        console.error(error.message);
        return error.message
    }
}

export async function getPublishers(campid) {
    const url = `${BASE_URL}​/api/Pages/GetEditedPageAndOriginalBuCampID?campaignId=${campid}`;
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
        const req = await fetch(`${BASE_URL}/api/InstagramApi/ا?username=${pubid}`, {
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


export async function getFilteredPublishers(ptype = undefined, pcat = undefined, maxp , minp, sex = undefined, sTaarifId = undefined) {
    const allPages = [];
    const taarifs = await getTaarifs();
    const taarif = !!sTaarifId ? taarifs[sTaarifId - 1].title : undefined;
    try {
        const req = await fetch(`${BASE_URL}/api/Pages/GetAllPageAndAllPricePage`)
        if (!req.ok) {
            throw new Error(req.statusText);
        }
        const res = await req.json();
        for (let i = 0; i < res.pages.length; i++) {
            const tmpPage = res.pages[i];
            allPages.push(tmpPage);
        }
    } catch {}
    const filtered = allPages.filter(page => sex ? page.sex == GENDERS.at(Number(sex) - 1).value : true ) // filter gender
                             .filter(page => pcat ? page.pageCategoryId == pcat : true) // filter categories
                             .filter(page => ptype ? page.pageTypeId == ptype : true ) // filter types
                             .filter(page => !!taarif ? !!page.pricePages.find(pPrice => pPrice.name === taarif) : true) // filter pricePages
    return filtered
}

export async function deletePublisher(pageId) {
    if (!pageId) {
        customAlert(`pageId ${pageId} is not valid`);
        return;
    }

    const token = getCookie("token");

    if (!token) {
        customAlert(`token ${token} is not valie`);
        return;
    }

    try {
        const req = await fetch(`${BASE_URL}/api/Pages/DeletePage?pageId=${pageId}`, {
            method: "POST"
        });

        if (!req.ok) {
            throw new Error(req.statusText);
        }

        const res = await req.text();
        customAlert(res);
        return res;
    } catch (error) {
        console.error(error);
        return 0
    }
}

export async function updatePublisher(publisherId, newData, type) {
    let url;
    if (type === "instagram") {
        url = `${BASE_URL}/api/PublisherInstagram/${publisherId}`
    } else {
        url = `${BASE_URL}/api/PublisherTel/${publisherId}`
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
        console.error(error.message);
        return "مشکلی در ادیت کردن پابلیشر ایجاد شده. لطفا دوباره امتحان کنید"
    }
}

export async function getPageTypes() {
    const token = getCookie ("token");
    try {
        const req = await fetch(`${BASE_URL}/api/PageType/GetAll`)

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
        const req = await fetch(`${BASE_URL}/api/PageTypeCategory/GetAll`, {
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

export async function deletePageType(name) {
    if (!name) {
        console.error(`name ${name} is not valid`);
        return
    }
    const token = getCookie("token");
    if (!token) {
        console.error(`token ${token} is not valid`)
        return
    }

    try {
        const req = await fetch(`${BASE_URL}/api/PageType/DeletePageType?name=${name}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!req.ok) {
            throw new Error(req.statusText);
        }

        const res = await req.json();
        return res
    } catch(error) {
        console.error(error);
        return 0
    }
}

export async function deletePageCat(name) {
    if (!name) {
        console.error(`name ${name} is not valid`);
        return
    }
    const token = getCookie("token");
    if (!token) {
        console.error(`token ${token} is not valid`)
        return
    }

    try {
        const req = await fetch(`${BASE_URL}/api/PageTypeCategory/DeletePageTypeCategories?categoryName=${name}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!req.ok) {
            throw new Error(req.statusText);
        }

        const res = await req.text();
        return res
    } catch(error) {
        console.error(error);
        return 0
    }
}


// instagram and telegram apis

export async function getInstaUser(username) {
    try {
        const req = await fetch(`${BASE_URL}/api/instagram/GetBusinessDiscoveryData?username=${username}`);
        
        if (!req.ok) {
            throw new Error("failed to fetch data from instagram");
        }

        const res = await req.json();
        return res;
    } catch (error) {
        console.error(error.message);
        return {}
    }
}

export async function getTelegramChannel(channelId) {
    try {
        const req = await fetch(`${BASE_URL}/api/Telegram/GetChannelProfilePhoto/@${channelId}`);
        
        if (!req.ok) {
            throw new Error("failed to fetch data from telegram");
        }

        const res = await req.json();
        return res;
    } catch (error) {
        console.error(error.message);
        return {}
    }
}


// ui scripts
export async function customAlert(text, xtype = "info") {
    notify(text, xtype);
}


// other functions
export function copy() {
const reportText = "در کلیپ برد کپی شد";
customAlert(reportText)
}

export async function uploadFile(path, file)  {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    const extension = getFileExtension(file.name)
    reader.onload = async function() {
        const filedata = reader.result

        try {
            const data = {
                filedata,
                fileName: `profile.${extension}`,
                filePath: `${FILES_BASE}/${path}`
            }

            const req = await fetch(`${BASE_URL}/Uploads/UploadFile`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!req.ok) {
                throw new Error("failed to send file");
            }

            const res = await req.json();
            customAlert(res.message)
        } catch (error) {
            customAlert("Failed To Upload File")
            console.error(error.message)
        }
    }
}

export async function getProfile(campid) {    
    const token = getCookie("token");

    const data = {
        fileName: "",
        filePath: `wwroot/campaign_profiles/campaign_number_${campid}`,
        filedata: ""
    }
    try {
        const req = await fetch(`${BASE_URL}/Uploads/getFiles`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!req.ok) {
            throw new Error("Failed to get files");
        }

        const res = await req.json();

        let fileurl;

        if (res.objectResult.length) {
            const array = res.objectResult;
            const profile = array.find(file => file.fileName.startsWith("profile"));
            fileurl = profile.filePath;
        }

        if (!!fileurl) {
            const req2 = await fetch(`${BASE_URL}/Uploads/downloadFile?url=${fileurl}`, {
                method: "POST",
                headers: {
                    // "Content-Type": "text/plain",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!req2.ok) {
                throw new Error("Failed To Download profile");
            }

            const res1 = await req2.json();

            const fileData = !!res1.objectResult ? res1.objectResult : "r¶¬\u0085ç_\u008aW";
            const dataUrl = `data:image/jpeg;base64,${fileData}`;

            return dataUrl;
        }
    } catch (error) {
        console.error(error.message);
        return "/logo.png";
    }
}

// files

export async function getShots(campaignid, publisherid) {
    const token = getCookie("token");
    const data = {
        fileName: "",
        filePath: `wwroot/campshots/${campaignid}/${publisherid}`,
        filedata: ""
    }
    try {
        const req = await fetch(`${BASE_URL}/Uploads/getFiles`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!req.ok) {
            throw new Error("Failed to get files");
        }

        const res = await req.json();

        if (res.objectResult.length) {
            const shots = res.objectResult
            if (shots.length) {
                const sortedShots = shots.sort((a, b) => parseInt(b.fileName.split(".")[0], 10) - parseInt(a.fileName.split(".")[0], 10))
                return sortedShots;
            } else {
                return []
            }
        }

    } catch (error) {
        console.error(error.message);
        return []
    }
}

export async function getShotData(url, extension = ".jpeg") {
    const type = getFileType(`asdnkasdlknasdasd.${extension}`);
    const token = getCookie("token");
    try {
        const req2 = await fetch(`${BASE_URL}/Uploads/downloadFile?url=${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
                "Authorization": `Bearer ${token}`,
            }
        });

        if (!req2.ok) {
            throw new Error("Failed To Download shot");
        }

        
        const res1 = await req2.json();        
        const fileData = !!res1.objectResult ? res1.objectResult : "r¶¬\u0085ç_\u008aW";
        const dataUrl = `data:${type}/${extension.slice(1)};base64,${fileData}`;
        
        return dataUrl;
    } catch (error) {
        console.error(error.message);
        return "data:text/plane;base64,r¶¬\u0085ç_\u008aW";
    }
}

export async function addPostShot(campaignid, publisherid, file) {
    const token = getCookie("token");

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async function() {
        const filedata = reader.result

        try {
            const now = Date.now();
            const fileExtension = getFileExtension(file.name);
            const data = {
                filedata,
                fileName: `${now}.${fileExtension}`,
                filePath: `wwroot/campshots/${campaignid}/${publisherid}`
            }

            const req = await fetch(`${BASE_URL}/Uploads/UploadFile`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (!req.ok) {
                throw new Error("failed to send file");
            }

            const res = await req.json();
            customAlert("فایل با موفقیت آپلود شد", "success")

        } catch (error) {
            customAlert("Failed To Upload File", "error")
            console.error(error.message)
        }
    }
}

async function getTaarifs() {
    const token = getCookie("token");
        try {
            const req = await fetch(`${BASE_URL}/api/PricePage/GetAllTitle`, {
                headers: {
                    "accept": "*/*"
                }
            });
        if (!req.ok) throw new Error("مشکلی در دریافت تعرفه ها پیش آمده.");
        const res = await req.json();
        return res
    } catch (error) {
        setReloadTaarifs(cur => cur+1);
    }
}