const fs= require('fs')
// 图片复制 （常规read+write占用内存）
const rs=fs.createReadStream('./1.png')
const ws=fs.createReadStream('./2.png')
rs.pipe(ws);