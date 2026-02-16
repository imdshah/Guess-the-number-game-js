const prompt = require("prompt-sync")();
let myarr = []
let input
let a
let b
let num= Math.floor(Math.random() * 100)+ 1
let chances=0
console.log("Random number has been generated between 1 - 100!!")
do{
    input= prompt("Enter your guessing number between 1 - 100: ")
    input=Number(input)
    myarr.push(input)
    if(input>100){
        myarr.pop(input)
        console.log("The number should lie between 1 and 100 only!")
    }
    if(num!=input){
        console.log("Try again!\n");
    }
    chances += 1
    if(chances>=5){
        toFindRange()
    }
    if(chances>=100){
        console.log("You have exceeded the chances of guessing the number");
        break;
    }
}
while(num!=input){
    console.log(`\nYes!! you guessed it right!! ${input} is the correct guess!`)
    console.log(`You guessed the number after ${chances} chance`)
}

function ascend(a,b){
    return a-b
}

function toFindRange(){
myarr.sort(ascend)
let lower
let upper
for (let index = 0; index < myarr.length -1; index++) {
    if (myarr[index] <= num && num <= myarr[index+1]){
        lower= myarr[index]
        upper= myarr[index+1]
        break
    }
    }
    if(lower !=num && upper !=num){
    console.log(`The number lies between ${lower} and ${upper}`)
    }
}
