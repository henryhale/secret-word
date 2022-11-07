// Generate random integer between range with limits inlcusive
export function randomInt(min, max) {
    return Math.floor(
        (Math.random() * (max - min) + 1) + min
    )
}

// Select DOM element using any selector
export function queryEl(selector) {
    return document.querySelector(selector);
}

// Select group elements  
export function queryAllEl(selector) {
    return document.querySelectorAll(selector);
}
