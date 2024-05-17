var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function group(obj){
for(let i=0; i<Object.keys(obj).length; i++) {
    listArray=[Object.keys(obj),Object.values(obj)]
    array=[listArray[[0]][i],listArray[[1]][i]]
    console.log(array)
}
}
group(student)
