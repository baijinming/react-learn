
// //批量产生一些方法
// function isType(type){
//     return function(content){
//         let t=Object.prototype.toString.call(content).replace(/\[object\s|\]/g,"");
//         return t==type;
//     }
// }
// let arr=["String","Number","Array","Object","Null"];
// let util={};
// arr.forEach(item=>{
//     util["is"+item]=isType(item);
// });
// console.log(util.isString("kkk"));
// console.log(util.isArray([1,2]));


// //callback  参数为函数
// const fs=require("fs");
// function after(times,callback){
//     return function(data){
//         if(--times==0){
//             callback(data)
//         }
//     }
// }
// let out=after(2,function(data){
//     console.log(data)
// })
// fs.readFile("./a.txt","utf-8",(err,data)=>{
//     out(data)
// });
// fs.readFile("./a.txt","utf-8",(err,data)=>{
//     out(data)
// })



