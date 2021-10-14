let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")
let drawEl = document.getElementById("draw-el")
let playEl = document.getElementById("play-el")
let stayEl = document.getElementById("stay-el")
let dealerEl = document.getElementById("dealer-el")

const cards = [0,0,0,0,0,0,0,0,0,0,0]
let cardCount = 2
let sum = 0
let dealerSum = 0
let lost = false

function play() {
    cards[0] = Math.ceil(Math.random() * 10)+1
    cards[1] = Math.ceil(Math.random() * 10)+1
    sum = cards[0] + cards[1]

    playEl.style.display = "none"
    cardsEl.innerText = "Your Cards: " + cards[0] + " - " + cards[1]
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
    cards[cardCount] = Math.ceil(Math.random() * 10)+1
    cardsEl.innerText += " - " + cards[cardCount]
    sum += cards[cardCount++]

    if(sum > 21) {
        lost = true
        drawEl.style.display = "none"
        stayEl.style.display = "none"
        playEl.style.display = "inline"
        evaluate()
    }
}

function stay() {
    drawEl.style.display = "none"
    stayEl.style.display = "none"
    playEl.style.display = "inline"
    evaluate()
}

function evaluate() {
    while(dealerSum < 16) {
        let num = Math.ceil(Math.random() * 10)+1
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

    dealerSum = 0
    lost = false
    cards.fill(0)
}