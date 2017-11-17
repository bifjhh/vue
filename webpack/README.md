# webpack 
### webpack的安装方法
- cnpm install webpack@1.14.0 -g
- 查询    webpack -v
- 安装nrm || cnpm
    + npm install nrm -g
    + npm install cnpm -g
    + 查询 nrm ls    
    + -g 代表全局

- webpack是一个资源的打包工具
    + 1.0   2.0 版本

- commonJS规范  
    var add = require('路径') //表示载入
 
# 打包 
### 命令
- webpack 入口文件 输出为文件
### 配置文件使用
- 在开发阶段下 创建 
    + src 文件夹   代码存放的位置
    + dist 文件夹  项目打包（上线）后代码存放的位置
    + 创建 webpack.config.js 文件 【固定命名】用于配置代码
        + 在使用时webpack打包时，在当前目录下 输入webpack，便会按照配置的属性，自动打包生成 
-  配置代码↓ 
 ```javascript 
// 导出一个对象
    module.exports={
        entry:'./src/main.js',//项目入口文件
        output:{//输入
            path:__dirname+'/dist',//打包后的文件放到哪一个目录，必须是个绝对目录
            filename:'build.js'//打包之后生成的文件名
        }
```


