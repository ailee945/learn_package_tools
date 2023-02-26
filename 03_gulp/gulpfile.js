// import { series, parallel } from 'gulp'
const { series, parallel, src, dest, watch } = require("gulp");
// babel 及 terser
const babel = require("gulp-babel");
const terser = require("gulp-terser");

const foo = (cb) => {
  console.log("foo任务执行");
  //
  /**
   * gulp 结束任务的两种方式
   * 1. cb 回调函数
   * 2. return 一个 stream / promise / event emitter / child process / observable类型的函数
   */
  cb();
};

const foo1 = (cb) => {
  setTimeout(() => {
    console.log("foo1~");
    cb();
  }, 2000);
};
const foo2 = (cb) => {
  setTimeout(() => {
    console.log("foo2~");
    cb();
  }, 1000);
};
const foo3 = (cb) => {
  setTimeout(() => {
    console.log("foo3~");
    cb();
  }, 3000);
};

// 似有任务
const seriesFoo = series(foo1, foo2, foo3);
const parallelFoo = parallel(foo1, foo2, foo3);

// 读取和写入文件
const copyFile = () => {
  // **/* 支持子文件夹的拷贝
  return src("./src/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest("build"));
};
watch("./src/**/*.js", copyFile);

const bar = (cb) => {
  console.log("start");
  setTimeout(() => {
    console.log("after 2s~");
    cb();
  }, 2000);
};

module.exports = {
  foo,
  bar,
  seriesFoo,
  parallelFoo,
  copyFile,
};

// 默认任务
module.exports.default = (cb) => {
  console.log("执行默认任务");
  cb();
};
