// import { TOKEN } from "./constants";

// export async function getInfo() {
//     try {
//         const req = await fetch(`https://graph.instagram.com/v20.0/me?fields=id,username&access_token=${TOKEN}`, {
//             method: "GET",
//         });

//         if (!req.ok) {
//             throw new Error("Failed to get Instagram information");
//         }

//         const data = await req.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err.message);
//     }
// }

export const TOKEN = "IGQWROUkNaUGc5YkNtLXE3MXExWlVYRHk5eV85cHJ2VjNaS29lN0xicEZAIZAk9uUWhSeHlqVXRQXy1HUXV5NFFvRlJSRnpXelpXZADc3ak1MYzdZAM2VMaDFWRnI4ZAEQ1cmxXMVRQUDF6TUJ6X2ljdGZAkbFY3QzhGa1UZD"

// import { TOKEN } from "./constants";

export async function getInfoXXX() {
  try {
    const req = await fetch(`https://graph.instagram.com/v20.0/me?fields=id,username&access_token=${TOKEN}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Access-Control-Allow-Origin": "graph.instagram.com",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
        }
    }); // Use template literal for dynamic token

    if (!req.ok) {
      throw new Error("Failed to get Instagram information");
    }

    const data = await req.json();
    console.log(data);
    return data; // Return the data for further use
  } catch (err) {
    console.error(err.message); 
    return null; // Return null if an error occurs
  }
}


export function getOffsetTop(element) {
    // Get the position of the element relative to the viewport
    const rect = element.getBoundingClientRect();

    // Calculate the offsetY of the element with respect to the entire page
    const offsetY = rect.top + window.pageYOffset;

    // Save the offsetY value for later use
    return offsetY
}

export function isElementInViewport (el) {

  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 
      &&
      // rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
      // && /* or $(window).height() */
      // rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

export function toKFormat(num) {
  if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
  } else {
      return num;
  }
}

export function toPercentFormat(num) {
  return (num * 100).toFixed(2) + '%';
}