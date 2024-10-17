export const root = "https://mokhatabgostar.ir";
export const apiroot = "https://mokhatabgostar.ir";

export const englishAlphabetLC = "abcdefghijklmnopqrstuvwxyz"; // english alphabet lower case letters

export const filesBase = "wwroot"
// cart start ----------------------------
export const cartCookies = {
  saveLocalDays: 7,
  campidName: "selected_campaign_id",
  selectedPrices: "selected_price_ids",
  selectedInflus: "selected_influs_ids",
} 
// cart end ----------------------------

// routes start ----------------------------
export const routes = {
  login: "/login",
}
// routes end ----------------------------

export const genders = [
  {
    text: "مرد",
    value: "man",
  },
  {
    text: "زن",
    value: "woman",
  },
  {
    text: "دیگر",
    value: "else",
  }
]

// user levels starts ----------------------------
export const userLevels = [
  {
    value: "user",
    prev: undefined,
    persianName: "کاربر معمولی",
    englishName: "Normal User",
    priceProperty: "normalprice",
    next: "professional",
    url: "/api/Pages/GetPageByFilteNormalPrice"
  },
  {
    value: "professional",
    prev: "user",
    persianName: "کاربر حرفه ای",
    englishName: "Professional User",
    priceProperty: "specialPrice",
    next: "coworker",
    url: "/api/Pages/GetPageByFilteSpecialPrice"
  },
  {
    value: "coworker",
    prev: "professional",
    persianName: "کاربر همکار",
    englishName: "coworker user",
    priceProperty: "hamkarPrice",
    next: "admin",
    url: "/api/Pages/GetPageByFilterHamkarPrice"
  },
  {
    value: "admin",
    prev: "coworker",
    persianName: "ادمین",
    englishName: "Admin",
    priceProperty: "normalprice",
    next: undefined,
    url: "/api/Pages/GetPageByFilteNormalPrice"
  }
]
// user levels end ----------------------------

export const priceSettings = {
  min: 0,
  max: 100000000
}

export const imagebase = "/src/assets/images"; // base source for addressing images in <img /> tags