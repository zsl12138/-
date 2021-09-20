const fs=require('fs')
// 异步IO
fs.readFile('config.txt',(err,data)=>{
  // 错误优先的回调
  if(err) throw err;
  console.log(data.toString());
})

// 同步IO
const data=fs.readFileSync('./config.txt');
console.log(data);

// 将node回调语发改成promise风格
(async()=>{
  const {promisify}=require('util');
  const readFile=promisify(fs.readFile)
  const data=await readFile('./config.txt');
  console.log(data.toString());
})()
