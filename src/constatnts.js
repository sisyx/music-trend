export const englishAlphabetLC = "abcdefghijklmnopqrstuvwxyz"; // english alphabet lower case letters

export const FILES_BASE = "wwroot"
// cart start ----------------------------
export const CART_COOKIES = {
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

// GENDERS Start ----------------------------
export const GENDERS = [
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
// GENDERS end ----------------------------

// TAARIFS list start ----------------------------
export const TAARIFS = [
  {
    text: "استوری 24 ساعته",
    value: "استوری 24 ساعته"
  },
  {
    text: "ریلز 24 ساعته",
    value: "ریلز 24 ساعته"
  },
  {
    text: "پست بلند مدت",
    value: "پست بلند مدت"
  },
  {
    text: "استوری مخصوص",
    value: "استوری مخصوص"
  },
  {
    text: "پست مخصوص",
    value: "پست مخصوص"
  },
]
// TAARIFS list end ----------------------------

// user levels starts ----------------------------
export const USER_LEVELS = [
  {
    value: "notValid",
    prev: undefined,
    persianName: "کاربر تایید نشده",
    englishName: "Not Verified User",
    priceProperty: undefined,
    next: "user",
    url: "/api/Pages/GetPageByFilteSpecialPrice",
    hasAccess: false,
  },
  {
    value: "user",
    prev: "notValid",
    persianName: "کاربر معمولی",
    englishName: "Normal User",
    priceProperty: "normalprice",
    next: "professional",
    url: "/api/Pages/GetPageByFilteNormalPrice",
    hasAccess: true,
  },
  {
    value: "professional",
    prev: "user",
    persianName: "کاربر حرفه ای",
    englishName: "Professional User",
    priceProperty: "specialPrice",
    next: "coworker",
    url: "/api/Pages/GetPageByFilteSpecialPrice",
    hasAccess: true,
  },
  {
    value: "coworker",
    prev: "professional",
    persianName: "کاربر همکار",
    englishName: "coworker user",
    priceProperty: "hamkarPrice",
    next: "admin",
    url: "/api/Pages/GetPageByFilterHamkarPrice",
    hasAccess: true,
  },
  {
    value: "admin",
    prev: "coworker",
    persianName: "ادمین",
    englishName: "Admin",
    priceProperty: "normalprice",
    next: undefined,
    url: "/api/Pages/GetPageByFilteNormalPrice",
    hasAccess: true,
  }
]
// user levels end ----------------------------

export const PRICE_SETTINGS = {
  min: 0,
  max: 100000000
}

export const imagebase = "/src/assets/images"; // base source for addressing images in <img /> tags

// Start Page Starts ------------------------------------------
export const timelinedata = [
  {
      title: "انتخاب ناشر",
      active: true
  },
  {
      title: "بررسی حساب کاربری"
  },
  {
      title: "پرداخت"
  },
  {
      title: "اتمام خرید"
  },
]
// Start Page Ends ------------------------------------------