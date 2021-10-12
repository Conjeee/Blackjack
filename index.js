let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")

function play() {
    let cardOne = Math.round(Math.random() * 11)
    let cardTwo = Math.round(Math.random() * 11)

    console.log(cardOne)
    let sum = cardOne + cardTwo

    cardsEl.innerText = "Cards: " + cardOne + " and " + cardTwo
    sumEl.innerText = "Sum: " + sum

    if(sum < 21) {
        textEl.innerText = "Draw another card?"
    }

    else if(sum === 21) {
        textEl.innerText = "You busted!"
    }

    else {
        textEl.innerText = "You Won!"
    }
}

function quit() {

}