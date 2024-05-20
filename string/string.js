let palidrome=prompt("Enter your string")
let comparePalidrome=''

for(let i=palidrome.length-1;i>=0;i--){
 comparePalidrome=comparePalidrome.concat(palidrome.charAt(i))
}
if(palidrome===comparePalidrome){
    console.log(palidrome+" is a palidrome")
}
else{
    console.log(palidrome +" is not a palidrome")
}