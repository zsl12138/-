// buffer用来帮助操作二进制文件
// 分配10字节缓冲区
const buf=Buffer.alloc(10);
console.log(buf);


const buf2=Buffer.from('a');
console.log(buf2);  //ASC-II

const buf3=Buffer.from('周重兰');
console.log(buf3);  //utf-8

const buf4=Buffer.concat([buf2,buf3])
console.log(buf4,buf4.toString());