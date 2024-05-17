var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}

let generatedobj={}
function group(obj){
    let keyValue=Object.keys(student)
    let valueList=Object.values(student)
for(let i=0; i<Object.keys(obj).length; i++) {
    generatedobj[valueList[i]]=keyValue[i]
    
   
}
console.log(generatedobj)
}
group(student)