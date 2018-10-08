const fs=require("fs")

function readFile(tex){
    return new Promise(function(resolve,reject){
        fs.readFile(tex,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
readFile("a.txt").then(res1=>{
    console.log(res1);
    return readFile("b.txt")
}).then(res2=>{
    console.log(res2)
}).catch(err=>console.log(err))
