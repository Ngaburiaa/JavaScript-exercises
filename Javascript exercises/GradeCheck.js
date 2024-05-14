let totalMarks=prompt("Enter your marks")
let examType=prompt("Enter your examtype")

function checkGrade(totalMarks,examType){
if(totalMarks>=89 && totalMarks <=100 && examType==="midterm"){
    console.log("Excellent job,you got an A+")

}
else if(totalMarks>=90 && totalMarks <=100 && examType==="final" ){
    console.log("Excellent job,you got an A+")
}
else if( totalMarks>=80 && totalMarks<=88 && (examType==="midterm" || examType==="final")){
    console.log("Good job ,you got an A")
}

else if( totalMarks>=75 && totalMarks<=89 && (examType==="midterm" || examType==="final"))
    {
    console.log("Well done, you got a B+")
   
}
else if( totalMarks>=70 && totalMarks<=74 && (examType==="midterm" || examType==="final"))
    {
    console.log("Nice work, you got a B")
   
}

else if( totalMarks>=60 && totalMarks<=69 && (examType==="midterm" || examType==="final"))
    {
    console.log("You got a C")
   
}

else 
    {
    console.log("You need to improve for the final examination")
   
}

}

checkGrade(totalMarks,examType)