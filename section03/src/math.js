// math 모듈 
/*
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}
*/

// Common JS (CJS)
/*
module.exports = {
    add : add,
    sub : sub,
}
*/
/*
module.exports = {
    add,
    sub,
}*/

// ES Module (ESM)
// export { add, sub };

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}