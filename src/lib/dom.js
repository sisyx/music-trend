/*
    This file contains functions and classes for working with
    dom elements and browser itself.
    * It does not matter which javascript library/framework 
    * you are using, these functions work wherever you want 
    * to use theme
*/

export function isElementInViewport(el) {

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

export function getOffsetTop(element) {
    // Get the position of the element relative to the viewport
    const rect = element.getBoundingClientRect();

    // Calculate the offsetY of the element with respect to the entire page
    const offsetY = rect.top + window.pageYOffset;

    // Save the offsetY value for later use
    return offsetY
}

export function setTitle(text) {
    if (typeof(text) == "string") {
        document.title = "مخاطب گستر | " + text;
    }
}