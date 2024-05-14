  let randomNumber=Math.floor(Math.random()*11)
  let Guess=prompt(parseInt("Enter your guessed number: "))
  
  if(Guess===randomNumber){
    console.log("Good Work")
  }

else{
    console.log("Not Matched")
}