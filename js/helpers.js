
export function randomInt(min, max) {
    return Math.floor(
        (Math.random() * (max - min) + 1) + min
    )
}

export function queryEl(selector) {
    return document.querySelector(selector);
}

export function queryAllEl(selector) {
    return document.querySelectorAll(selector);
}