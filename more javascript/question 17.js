
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({  name : "David Rayy",
sclass : "VI",
rollno : 12 }, "name"));
