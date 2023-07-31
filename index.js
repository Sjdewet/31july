const {writeFile, readFile, appendFile} = require('fs')

writeFile('./data.txt', 'hello', (err,data)=>{
    if(!err)
    console.log(data);
})

appendFile('./data.txt', ' hello Summer', (err,data)=>{
    if(!err)
    console.log(data);
})

readFile('./data.txt', 'utf-8', (err,data)=>{
    if(!err)
    console.log(data);
})