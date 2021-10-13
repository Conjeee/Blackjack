let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")
let drawEl = document.getElementById("draw-el")
let playEl = document.getElementById("play-el")
let stayEl = document.getElementById("stay-el")
let dealerEl = document.getElementById("dealer-el")

let cardOne = 0
let cardTwo = 0
let cardThree = 0
let sum = cardOne + cardTwo + cardThree
let dealerSum = 0
let lost = false

function play() {
    cardOne = Math.ceil(Math.random() * 11)
    cardTwo = Math.ceil(Math.random() * 11)

    playEl.style.display = "none"
    cardsEl.innerText = "Your Cards: " + cardOne + " - " + cardTwo
    dealerEl.innerText = "Dealer's Cards: "

    if(sum <= 21) {
        textEl.innerText = "Draw another card?"
        drawEl.style.display = "inline"
        stayEl.style.display = "inline"
    }

    else {
        textEl.innerText = "You busted! Play Again?"
        lost = true
        evaluate()
    }
}

function draw() {
    drawEl.style.display = "none"
    stayEl.style.display = "none"
    playEl.style.display = "inline"

    cardsEl.innerText += " - " + Math.ceil(Math.random() * 11)

    if(sum > 21) {
        textEl.innerText = "You Busted! You Lost This Round."
        lost = true
    }
    evaluate()
}

function stay() {
    drawEl.style.display = "none"
    stayEl.style.display = "none"
    playEl.style.display = "inline"
    evaluate()
}

function evaluate() {
    while(dealerSum < 16) {
        let num = Math.ceil(Math.random() * 11)
        dealerSum += num
        dealerEl.innerText += " - " + num
    }

    if(lost || (dealerSum <= 21 && dealerSum > sum)) {
        textEl.innerText = "You Lost! Play Again?"
    }

    else if(dealerSum > 21) {
        textEl.innerText = "You Won! Play Again?"
    }

    else {
        textEl.innerText = "You Tied! Play Again?"
    }
    setNeutral()
}

function setNeutral() {
    dealerSum = 0
    lost = false
}