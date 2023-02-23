import { sum, mul } from "./utils/math";
import { formatPrice } from "./utils/format";

console.log("=== main.js ===");

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(sum(100, 200));

// 原生支持ts
console.log(formatPrice(1000));
