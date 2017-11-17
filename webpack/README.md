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

## Loaders
- 通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。

### 打包css文件
- 初始化npm
- 安装打包css文件的依赖包
        style-loader css-loader --save-dev
 - 在webpack.config.js 中添加配置 module 选项
 ```javascript
 // 导出一个对象
module.exports={
    entry:'./src/main.js',//项目入口文件
    output:{//输入
        path:__dirname+'/dist',//打包后的文件放到哪一个目录，必须是个绝对目录
        filename:'build.js'//打包之后生成的文件名
    },
    module:{//打包css需要添加配置 moudle 选项
        loaders:[
            {   //匹配所有的css文件
                test: /\.css$/,
                loader: 'style-loader!css-loader'
                //顺序不能错 
            }
        ]
    }

}
 ```   
- 注意
    + 需要在入口文件中添加css文件
    +   require('../static/css/site.css');    
- 在项目目录中新建 static 静态资源目录
    + 在static 下建立css文件 
    +   目录随意，但是路径要写对
- 在入口文件中导入 css文件    
- 然后打包

### 打包scss文件
- 下载依赖包
        cnpm install node-sass sass-loader css-loader style-loader --save-dev
- 在webpack.config.js 中添加配置scss依赖的loader
- 代码↓
```javascript
{//增加scss配置
    test: /\.scss$/, //打包 .scss文件
    loader: 'style-loader!css-loader!sass-loader'
}
            
```
- 建立scss文件 并在入口文件中导入
- 打包

### 打包Less文件

- 下载依赖包
        cnpm install node-sass sass-loader css-loader style-loader less less-loader --save-dev
- 在webpack.config.js 中添加配置less依赖的loader
- 代码↓
```javascript
 {//增加less配置
    test: /\.less/, //打包 .less文件
    loader: 'style-loader!css-loader!less-loader'
}
```
- 建立scss文件 并在入口文件中导入
- 打包

### 打包scss文件
- 下载依赖包
        cnpm install node-sass sass-loader css-loader style-loader url-loader file-loader --save-dev
- 在webpack.config.js 中配置这两个loader
- 代码↓
```javascript
{
    test:/\.(png|jpg|gif|ttf|svg)$/,//打包url请求的资源文件
    loader:'url-loader?limit=20000' //limit表示图片的大小为20K是临界值，小于20K的图片均被打包到build.js中去，请求图片就会很快
}          
```
- 在css文件导入一个图片 