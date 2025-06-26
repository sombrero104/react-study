// Common JS (CJS)
/*
const moduleData = require("./math");
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));
console.log(moduleData);
*/
/*
const {add, sub} = require("./math");
console.log(add(1, 2));
console.log(sub(1, 2));
*/

// ES Module (ESM)
/*
import mul from "./math.js";
import { add, sub } from "./math.js";
*/
import mul, { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";
const color = randomColor();
console.log(color);


