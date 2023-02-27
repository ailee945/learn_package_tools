const { src, dest, parallel, series, watch } = require("gulp");

const htmlmin = require("gulp-htmlmin");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const inject = require("gulp-inject");
const browserSync = require("browser-sync");

const htmlTask = () => {
  return src("./src/**/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("./build/"));
};

const jsTask = () => {
  return src("./src/**/*.js")
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(terser())
    .pipe(dest("./build"));
};

const cssTask = () => {
  return src("./src/**/*.css").pipe(dest("./build"));
};

const injectTask = () => {
  return src("build/index.html")
    .pipe(inject(src(["build/index.css", "build/index.js"]), { relative: true }))
    .pipe(dest("build/"));
};

const build = series(parallel(htmlTask, jsTask, cssTask), injectTask);

const bs = browserSync.create();
const serve = () => {
  watch("./src/**", build);
  bs.init({
    port: 8080,
    open: true,
    files: "./build/*",
    server: {
      baseDir: "./build",
    },
  });
};

module.exports = {
  htmlTask,
  jsTask,
  cssTask,
  injectTask,
  build,
  serve
};
