// 支持cjs
const commonjs = require("@rollup/plugin-commonjs");
// 支持node_modules包
const nodeResolve = require("@rollup/plugin-node-resolve");
// 支持babel
// pnpm add @babel/core @rollup/plugin-babel -D
const babel = require("@rollup/plugin-babel");
// 代码压缩
const terser = require("@rollup/plugin-terser");
// 打包css
const postcss = require('rollup-plugin-postcss')

module.exports = {
  input: "libs/index.js",
  // 传入数组可以打包多种格式
  output: {
    file: "dist/index.config.umd.js",
    format: "umd",
    name: "utils",
    // Use "output.globals" to specify browser global variable names corresponding to external modules:
    globals: {
      lodash: "_",
    },
  },
  // 不加这个选项的话，默认也会将lodash打包
  external: ["lodash"],
  plugins: [
    commonjs(),
    nodeResolve(),
    babel({
      // 配置的作用 ???
      babelHelpers: "bundled",
      exclude: /node_modules/,
    }),
    terser(),
    postcss()
  ],
};
