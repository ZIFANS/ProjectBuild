# Grunt教程

## 创建项目的目录

- build 构建生成的文件所在的位置

- src 源码文件夹

    - js  

    - css
- index.html 页面文件

- Gruntfile.js 配置文件（注意首字母大写）

- package.json 项目包配置文件

## 安装grunt

- 全局安装 grunt-cli

    npm install -g grunt-cli

- 安装grunt

    npm install grunt --save-dev

## 配置Gruntfile.js文件

- 运行grunt concat(插件名称) (任务名称区分大小写)

- grunt本身不支持ES6语法，可以先用babel将ES6转化为ES5，然后再进行操作。

- **grunt执行任务的同步的**

## 安装插件

- 合并js文件

    npm install grunt-contrib-concat --save-dev

- 压缩js文件

    npm install -grunt-contrib-uglify --save-dev

    **没有使用的函数不会被压缩**

- js语法检查

    npm install grunt-contrib-jshint --save-dev

    在根目录下创建 .jshintrc 文件

- 压缩css

    npm install grunt-contrib-cssmin --save-dev

- watch插件实现自动化

    npm install grunt-contrib-watch --save-dev