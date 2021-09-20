const http=require('http');
const fs=require('fs');

http.createServer((request,response)=>{
  const{url,method}=request;
  if(url==='/'&&method==='GET'){
    fs.readFile('index.html',(err,data)=>{
    if(err){
      response.writeHead(500,{
        'Content-Type':'text/plain;charset=utf-8'
      })
      response.end('500 服务器寄了')
      return;
    }
    response.statusCode=200;
    response.setHeader(200,'Content-Type','text/html')
    response.end(data)
    })
  }
else if(url==='./user'&&method==='GET'){
  response.writeHead('Content-Type:application/json')
response.end(JSON.stringify({name:zsl}))
}
else if(method==='GET'&&headers.accept.indexOf('image/*')){
  // readFile需要把全部图片挂在到服务器
  fs.createReadStream('.'+url).pipe(response);
}
  else{
    response.statusCode=404
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('404 Not Found');
  }
console.log("a request",getPrototypeChain(response));
// TODO 流 
response.end('Winter老师永远滴神')
})
.listen(3001,()=>{
  console.log('server at 3000');
})
function getPrototypeChain(obj){
  const protoChain=[]
  while(obj=Object.getPrototypeOf(obj)){
    protoChain.push(obj)
  }
  return protoChain;
}