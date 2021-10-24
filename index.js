let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")
let drawEl = document.getElementById("draw-el")
let playEl = document.getElementById("play-el")
let stayEl = document.getElementById("stay-el")
let dealerEl = document.getElementById("dealer-el")

const tens = ["cardPics/10.jpg","cardPics/J.jpg","cardPics/Q.jpg","cardPics/K.jpg"]
const cards = ["cardPics/2.jpg","cardPics/3.jpg","cardPics/4.jpg","cardPics/5.jpg","cardPics/6.jpg",
"cardPics/7.jpg","cardPics/8.jpg","cardPics/9.jpg",randTen(),"cardPics/11.jpg"]
let sum = 0
let dealerSum = 0
let lost = false

function play() {
    let num1 = Math.ceil(Math.random() * 10)+1
    let num2 = Math.ceil(Math.random() * 10)+1
    sum = num1 + num2

    playEl.style.display = "none"
    cardsEl.innerText = "Your Cards: "
    dealerEl.innerText = "Dealer's Cards: "

    addImage(num1, 'cards-el')
    addImage(num2, 'cards-el')

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
    let num = Math.ceil(Math.random() * 10)+1
    addImage(num, 'cards-el')
    sum += num

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
        addImage(num, 'dealer-el')
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
}

function randTen() {
    let num = Math.floor(Math.random() * 4)
    return tens[num]
}

function addImage(num, slot) {
    let image = document.createElement("img")
    image.src = cards[num-2]
    document.getElementById(slot).appendChild(image)
}