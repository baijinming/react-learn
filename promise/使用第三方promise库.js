

const fs=require("fs");
const Promise=require("bluebird");

const readFile=Promise.promisify(fs.readFile);

readFile("a.txt","utf-8").then(res=>console.log(res)).catch(err=>console.log(err))