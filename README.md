# 云柜网站开发

## 开发环境
采用 Nodejs 为基础的 gulp 搭建前端自动化模块，并利用 bower 工具对前端库进行管理，如果从未安装过这两个工具，通过以下命令安装：

* `(sudo)npm install -g gulp`
* `(sudo) npm install -g bower`

### gulpfile 主要模块
* test    —— js 语法测试
* sass    —— scss 编译
* html    —— css 和 js 文件合并压缩以及混淆
* image   —— 图像优化压缩
* static  —— 静态模板渲染
* connect —— 建立一个 http 环境，并设置 liveload 端口
* server  —— 打开浏览器窗口
* watch   —— 文件变化观察

### 常用 gulp 指令
* `gulp test`  —— 测试网站各 js 文件
* `gulp start` —— 项目启动
* `gulp build` —— 项目编译，完成后在项目根目录下生成 dist 目录，内为最终文件


## 项目运行
* `npm install`
* `bower install`
* `gulp start`
* `open http://localhost:9000/app/`

