/** 入口文件 2019-2-11 */

/** 当前文件夹下，命令行执行“webpack main.js build.js”，会生成 build.js 文件
 *  访问 http://www.xuecheng.com/webpack_test02/webpack_01.html
 */
// 导入 model01.js 文件
var {add} = require("./model01");
var Vue = require("./vue.min");

// 编写 MVVM 中的 model 部分及 VM （ViewModel）部分
var VM = new Vue({
    el: "#app", // 表示当前 vue 对象接管 app 的 div 区域
    data: {
        name: "加法计算", // 相当于是 MVVM 中的 Model 这个角色
        num1: 0,
        num2: 0,
        result: 0,
    },
    methods: {
        change: function () {
            this.result = add(Number.parseInt(this.num1), Number.parseInt(this.num2));
        }
    }
});
