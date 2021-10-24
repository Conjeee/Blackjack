let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")
let drawEl = document.getElementById("draw-el")
let playEl = document.getElementById("play-el")
let stayEl = document.getElementById("stay-el")
let dealerEl = document.getElementById("dealer-el")

const cardPictureArray = [
    ["cardPics/2bc.png","cardPics/2bs.png","cardPics/2rd.png","cardPics/2rh.png"],
    ["cardPics/3bc.png","cardPics/3bs.png","cardPics/3rd.png","cardPics/3rh.png"],
    ["cardPics/4bc.png","cardPics/4bs.png","cardPics/4rd.png","cardPics/4rh.png"],
    ["cardPics/5bc.png","cardPics/5bs.png","cardPics/5rd.png","cardPics/5rh.png"],
    ["cardPics/6bc.png","cardPics/6bs.png","cardPics/6rd.png","cardPics/6rh.png"],
    ["cardPics/7bc.png","cardPics/7bs.png","cardPics/7rd.png","cardPics/7rh.png"],
    ["cardPics/8bc.png","cardPics/8bs.png","cardPics/8rd.png","cardPics/8rh.png"],
    ["cardPics/9bc.png","cardPics/9bs.png","cardPics/9rd.png","cardPics/9rh.png"],
    ["cardPics/10bc.png","cardPics/10bs.png","cardPics/10rd.png","cardPics/10rh.png"
    ,"cardPics/Jbc.png","cardPics/Jbs.png","cardPics/Jrd.png","cardPics/Jrh.png"
    ,"cardPics/Qbc.png","cardPics/Qbs.png","cardPics/Qrd.png","cardPics/Qrh.png"
    ,"cardPics/Kbc.png","cardPics/Kbs.png","cardPics/Krd.png","cardPics/Krh.png"],
    ["cardPics/11bc.png","cardPics/11bs.png","cardPics/11rd.png","cardPics/11rh.png"],
]
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

function cardRepresent(num) {
    let randomCard = Math.ceil(cardPictureArray[num-2].length * Math.random())-1
    return cardPictureArray[num-2][randomCard]
}

function addImage(num, location) {
    let image = document.createElement("img")
    image.src = cardRepresent(num)
    document.getElementById(location).appendChild(image)
}