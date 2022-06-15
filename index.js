let age = Number(prompt("What is your age?"))
let distance = Number(prompt("What distance(km) are you travelling?"))

let pricePerKm = 0.21
let juniorDiscountRate = 0.2
let seniorDiscountRate = 0.4

let ticketPrice = distance * pricePerKm
let juniorTicketPrice = ticketPrice - (ticketPrice * juniorDiscountRate)
let seniorTicketPrice = ticketPrice - (ticketPrice * seniorDiscountRate)

if (age < 18) {
    console.log(
        `
        You get the Junior Discount!
        You need to pay: £${juniorTicketPrice.toFixed(2)}
          `,
    )
}
else if (age < 18) {
    console.log(
        `
        You get the Senior Discount!
        You need to pay: £${seniorTicketPrice.toFixed(2)}
          `,
    )
}
else {
    console.log(
        `
            You need to pay: £${ticketPrice.toFixed(2)}
              `,
    )
}
