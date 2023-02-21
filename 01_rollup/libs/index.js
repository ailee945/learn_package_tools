// 打包 umd 支持文件 (注意：需要添加 --name)
// npx rollup ./libs/index.js -f umd -o dist/index_umd.js --name $
// 打包 commonjs 支持文件
// npx rollup ./libs/index.js -f cjs -o dist/index_umd.js
// 打包 浏览器 浏览器支持文件 iife(立即执行函数)
// npx rollup ./libs/index.js -f iife -o dist/index_umd.js --name $

const foo = () => {
  console.log("foo exection ~");
};

export { foo };
