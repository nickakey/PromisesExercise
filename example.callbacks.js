const fs = require("fs");


function pluckFirstLineFromFile(filePath){
  return new Promise((resolve, reject)=>{
    fs.readFile(filePath, "utf8", (err, data)=>{
      if(err){
        reject(err)
      } else {
        resolve(data.split("\n")[0]);
      }
    })
  })
}

pluckFirstLineFromFile("text.txt")
.then((data)=>{
  console.log(data);
})
