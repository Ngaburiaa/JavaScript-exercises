fs.readFile(path.join(__dirname,"lorem.txt"),"utf8",(err,data)=>{
  if(err) {throw err}
  //   //use a .toString() method to decode the buffer to string
 