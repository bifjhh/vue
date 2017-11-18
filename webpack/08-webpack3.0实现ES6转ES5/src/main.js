// 1.0 获取dom对象
var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var bt = document.querySelector('#bt');
var res = document.querySelector('#res');

// 2.0 导入site.css文件
// require('../static/css/site.css');
// require('../static/css/sitel.scss');
// require('../static/css/site2.less');
// 使用es6语法导入 
import '../static/css/site.css'; //不返回函数对象的直接在import 后面写 路径
import addObj from './calc.js'; //返回的对象的，需要设置接受的名称，另外不能写在某一函数的内部，必须写在顶级（全局）
bt.onclick = function () {

    // 2.0 获取calc.js中的add方法并且调用计算结果
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    // 调用add方法
    // var add = require('./calc.js'); //es5语法
    // res.value = add(v1value, v2value);//es5语法
    res.value = addObj.add(v1value, v2value);
}
