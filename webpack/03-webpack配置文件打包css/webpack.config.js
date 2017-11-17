// 导出一个对象
module.exports={
    entry:'./src/main.js',//项目入口文件
    output:{//输入
        path:__dirname+'/dist',//打包后的文件放到哪一个目录，必须是个绝对目录
        filename:'build.js'//打包之后生成的文件名
    },
    module:{//打包css需要添加配置 moudle 选项
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }

}