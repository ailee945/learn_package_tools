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
const postcss = require("rollup-plugin-postcss");
// 打包vue
const vuePlugin = require("rollup-plugin-vue");
const replace = require("@rollup/plugin-replace");
// 本地服务器
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");

// 生产换环境和开发环境使用不同的插件
const plugins = [
  commonjs(),
  nodeResolve(),
  babel({
    // 配置的作用 ???
    babelHelpers: "bundled",
    exclude: /node_modules/,
  }),
  postcss(),
  vuePlugin(),
  replace({
    preventAssignment: true,
    // "process.env.NODE_ENV": '"production"',
    // OR
    "process.env.NODE_ENV": JSON.stringify("production"),
  }),
];
if (process.env.NODE_ENV === "production") {
  plugins.push(terser());
} else {
  plugins.push(
    serve({
      contentBase: ".",
      port: 8002,
      // 自动打开浏览器
      // open: true,
    }),
    livereload("dist")
  );
}

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
  plugins,
};
