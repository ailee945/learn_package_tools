// 打包 umd 支持文件 (注意：需要添加 --name)
// npx rollup ./libs/index.js -f umd -o dist/index.umd.js --name $
// 打包 commonjs 支持文件
// npx rollup ./libs/index.js -f cjs -o dist/index.cjs.js
// 打包 浏览器 浏览器支持文件 iife(立即执行函数)
// npx rollup ./libs/index.js -f iife -o dist/index.browser.js --name $
// vue
import { createApp } from "vue";
import App from "../vue/App.vue";
createApp(App).mount(document.querySelector("#app"));

import _ from "lodash";
// const _ = require("loadsh");

const foo = () => {
  console.log("foo exection ~");
  const newArr = _.join([2, 3, 4]);
  console.log(newArr);
};

export { foo };
