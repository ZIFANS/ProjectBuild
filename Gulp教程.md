# Gulp教程

## Gulp的特点

- 任务化

- 基于流(Gulp有自己的内存)

- 异步

## 创建项目目录

- dist

- src

    - js

    - css

    - less

- index.html

- gulpfile.js 配置文件（首小写，Gruntfile.js 首字母大写）

- package.json

## 安装gulp

- 全局安装 npm install gulp -g

- 局部安装 npm gulp --save-dev

## gulp插件

**写return可以让任务异步执行**

- 合并文件（js and css 文件）

- 压缩js文件

- 文件重命名

    npm install gulp-concat gulp-uglify gulp-rename --save-dev


- 编译less

- 压缩css

    npm install gulp-less gulp-clean-css --save-dev

- 压缩html

    npm install gulp-htmlmin --save-dev

- 实现自动编译刷新

    npm install gulp-livereload --save-dev

    npm install gulp-connect --save-dev