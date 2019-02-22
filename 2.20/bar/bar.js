//抛出   exports  module.exports
//exports和module.exports的区别？(3)
/*
* 1、exports是module.exports的引用
* 2、exports和module.exports的初始值为{}
* 3、module.exports指向exports
* */
//console.log(exports===module.exports);

var name="tom";
var obj={
    name:"tom",
    age:21
};
function fn(){
    return 345;
}
exports.name=name;
module.exports.aa=obj;
module.exports.bb=fn();




