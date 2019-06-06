### commander模块

地址：https://github.com/tj/commander.js

· command

命令描述<可省略>：如果存在，且没有显示调用action(fn)，就会启动子命令程序，否则会报错

### 脚手架

该脚手架目前支持构建一个react的框架

### 本地调试

1. 开发目录里面执行npm link，会自动映射到usr/local/lib/node_modules中,启动命令会映射到usr/local/bin中

2. 删除全局模块，删除usr/local/lib/node_modules中的该模块，然后删除usr/local/bin中对应的bin的命令。