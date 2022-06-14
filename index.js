let age =prompt("What is your age?")
let distance=prompt("What distance(km) are you travelling?")

if(age<18){
    ticketPrice=(distance*0.21)*0.8
}
else if(age>65){
    ticketPrice=(distance*0.21)*0.6
}
else{
    ticketPrice=distance*0.21  
}
console.log("Your ticket price is", ticketPrice.toFixed(1), "pounds")