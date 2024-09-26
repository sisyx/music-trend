export const root = "https://mokhatabgostar.ir";
export const apiroot = "https://mokhatabgostar.ir";

export const englishAlphabetLC = "abcdefghijklmnopqrstuvwxyz"; // english alphabet lower case letters

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

// user levels starts ----------------------------
export const userLevels = [
  {
    value: "user",
    prev: undefined,
    persianName: "کاربر معمولی",
    englishName: "Normal User",
    priceProperty: "normalprice",
    next: "professional"
  },
  {
    value: "professional",
    prev: "user",
    persianName: "کاربر حرفه ای",
    englishName: "Professional User",
    priceProperty: "specialPrice",
    next: "coworker",
  },
  {
    value: "coworker",
    prev: "professional",
    persianName: "کاربر همکار",
    englishName: "coworker user",
    priceProperty: "hamkarPrice",
    next: "admin",
  },
  {
    value: "admin",
    prev: "coworker",
    persianName: "ادمین",
    englishName: "Admin",
    priceProperty: "normalprice",
    next: undefined
  }
]
// user levels end ----------------------------

export const imagebase = "/src/assets/images"; // base source for addressing images in <img /> tags