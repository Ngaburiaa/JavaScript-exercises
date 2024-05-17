var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
    function all(obj){
    
    
    for( let a=0;a<=Object.keys(student).length;a++){
        console.log(Object.values(student)[a])
    }
    }
    all( student)
    