// let obj={0:"a",1:"b",length:2,[Symbol.iterator]:function(){
//     let index=0;
//     return {
//         next(){
//             return{
//                 value:obj[index],
//                 done:index++>=obj.length
//             }
//         }
//     }
// }}
// let arr=[...obj];
// console.log(arr)

// //模拟迭代器
// function f(arr){
//     let index=0;
//     return{
//         next(){
//             return{
//                 value:arr[index],
//                 done:++index>=arr.length
//             }
//         }
//     }
// }
// let arr=[1,2,3,5,6,7];
// let ff=f(arr);
// console.log(ff.next());
// console.log(ff.next());
// console.log(ff.next());
// console.log(ff.next());
// console.log(ff.next());
// console.log(ff.next());
// console.log(ff.next());



