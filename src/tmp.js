import { generateRandomNumber } from "./utils/numbers";

export const allPriceTitles = [
    "استوری 24 ساعته",
    "پست 6 ساعته",
    "پست 24 ساعته",
    "ریلز"
]

export const websitePriceTitles = [
    "تعرفه یک",
    "تغرفه دو",
    "تغرفه سه",
    "تغرفه چهار",
    "تغرفه پنج",
    "تغرفه شیش",
];

export const telegramPriceTitles = [
    "تعرفه یک",
    "تغرفه دو",
    "تغرفه سه",
    "تغرفه چهار",
    "تغرفه پنج",
    "تغرفه شیش",
];

export const tmpPages = [
    {
        pageId: "cristiano",
        showName: "Cristiano Ronaldo",
        followers: "7M",
        followings: "6",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "leomessi",
        showName: "Leonel Messi",
        followers: "6M",
        followings: "100",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "kimkardashian",
        showName: "Kim Kardashian",
        followers: "350M",
        followings: "200",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "selenagomez",
        showName: "Selena Gomez",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "kyliejenner",
        showName: "Kylie Jenner",
        followers: "380M",
        followings: "150",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "arianagrande",
        showName: "Ariana Grande",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "beyonce",
        showName: "Beyoncé",
        followers: "280M",
        followings: "50",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "virat Kohli",
        showName: "Virat Kohli",
        followers: "250M",
        followings: "100",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "DwayneJohnson",
        showName: "Dwayne Johnson",
        followers: "370M",
        followings: "150",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "neymarjr",
        showName: "Neymar Jr.",
        followers: "200M",
        followings: "50",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // Add more fictional influencers here:
    {
        pageId: "influencer1",
        showName: "Tech Influencer",
        followers: "1M",
        followings: "500",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "influencer2",
        showName: "Fashion Blogger",
        followers: "500K",
        followings: "200",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        pageId: "influencer3",
        showName: "Travel Vlogger",
        followers: "2M",
        followings: "100",
        prices: [
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: allPriceTitles[generateRandomNumber(0, allPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // ... Add more fictional influencers as needed
];

export const tmpChannels = [
    {
        channelId: "cristiano",
        showName: "Cristiano Ronaldo",
        followers: "7M",
        followings: "6",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "leomessi",
        showName: "Leonel Messi",
        followers: "6M",
        followings: "100",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "kimkardashian",
        showName: "Kim Kardashian",
        followers: "350M",
        followings: "200",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "selenagomez",
        showName: "Selena Gomez",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "kyliejenner",
        showName: "Kylie Jenner",
        followers: "380M",
        followings: "150",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "arianagrande",
        showName: "Ariana Grande",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "beyonce",
        showName: "Beyoncé",
        followers: "280M",
        followings: "50",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "virat Kohli",
        showName: "Virat Kohli",
        followers: "250M",
        followings: "100",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "DwayneJohnson",
        showName: "Dwayne Johnson",
        followers: "370M",
        followings: "150",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "neymarjr",
        showName: "Neymar Jr.",
        followers: "200M",
        followings: "50",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // Add more fictional influencers here:
    {
        channelId: "influencer1",
        showName: "Tech Influencer",
        followers: "1M",
        followings: "500",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "influencer2",
        showName: "Fashion Blogger",
        followers: "500K",
        followings: "200",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        channelId: "influencer3",
        showName: "Travel Vlogger",
        followers: "2M",
        followings: "100",
        prices: [
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: telegramPriceTitles[generateRandomNumber(0, telegramPriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // ... Add more fictional influencers as needed
];


export const tmpSites = [
    {
        siteUrl: "cristiano.com",
        showName: "Cristiano Ronaldo",
        followers: "7M",
        followings: "6",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "leomessi.com",
        showName: "Leonel Messi",
        followers: "6M",
        followings: "100",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "kimkardashian.com",
        showName: "Kim Kardashian",
        followers: "350M",
        followings: "200",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "selenagomez.com",
        showName: "Selena Gomez",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "kyliejenner.com",
        showName: "Kylie Jenner",
        followers: "380M",
        followings: "150",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "arianagrande.com",
        showName: "Ariana Grande",
        followers: "350M",
        followings: "100",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "beyonce.com",
        showName: "Beyoncé",
        followers: "280M",
        followings: "50",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "virat Kohli.com",
        showName: "Virat Kohli",
        followers: "250M",
        followings: "100",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "DwayneJohnson.com",
        showName: "Dwayne Johnson",
        followers: "370M",
        followings: "150",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "neymarjr.com",
        showName: "Neymar Jr.",
        followers: "200M",
        followings: "50",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // Add more fictional influencers here:
    {
        siteUrl: "influencer1.com",
        showName: "Tech Influencer",
        followers: "1M",
        followings: "500",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "influencer2.com",
        showName: "Fashion Blogger",
        followers: "500K",
        followings: "200",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    {
        siteUrl: "influencer3.com",
        showName: "Travel Vlogger",
        followers: "2M",
        followings: "100",
        prices: [
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(1000, 10000),
                normalprice: generateRandomNumber(15000, 20000),
                specialPrice: generateRandomNumber(12000, 15000),
            },
            {
                title: websitePriceTitles[generateRandomNumber(0, websitePriceTitles.length - 1)],
                hamkarPrice: generateRandomNumber(5000, 8000),
                normalprice: generateRandomNumber(7500, 10000),
                specialPrice: generateRandomNumber(6000, 8500),
            },
        ]
    },
    // ... Add more fictional influencers as needed
];