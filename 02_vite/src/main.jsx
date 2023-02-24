import { sum, mul } from "./utils/math";
import { formatPrice } from "./utils/format";
// 原生支持css
import "./style/style.css";
// 原生支持less
import "./style/style.less";
// 通过插件支持vue
import { createApp } from "vue";
import App from "./views/App.vue";
// react
import ReactApp from "./views/App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
// vite build
// vite preview

console.log("=== main.js ===");

console.log(sum(10, 20));
console.log(mul(10, 20));
console.log(sum(100, 200));

// 原生支持ts
console.log(formatPrice(1000));
// vue
const titleEl = document.createElement("div");
titleEl.textContent = "style.less";
titleEl.className = "title";
document.body.append(titleEl);
createApp(App).mount(document.querySelector("#app"));
// react
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ReactApp />);
