// 1.0 获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

// 2.0 导入site.css文件
require('../static/css/site.css');

bt.onclick = function () {

    // 2.0 获取calc.js中的add方法并且调用计算结果
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    // 调用add方法
    var add = require('./calc.js');
    res.value = add(v1value, v2value);
}
