let cardsEl = document.getElementById("cards-el")
let textEl = document.getElementById("text-el")
let drawEl = document.getElementById("draw-el")
let playEl = document.getElementById("play-el")
let stayEl = document.getElementById("stay-el")
let dealerEl = document.getElementById("dealer-el")

const cardPictureArray = [
    ["cardPics/2bc-min.png","cardPics/2bs-min.png","cardPics/2rd-min.png","cardPics/2rh-min.png"],
    ["cardPics/3bc-min.png","cardPics/3bs-min.png","cardPics/3rd-min.png","cardPics/3rh-min.png"],
    ["cardPics/4bc-min.png","cardPics/4bs-min.png","cardPics/4rd-min.png","cardPics/4rh-min.png"],
    ["cardPics/5bc-min.png","cardPics/5bs-min.png","cardPics/5rd-min.png","cardPics/5rh-min.png"],
    ["cardPics/6bc-min.png","cardPics/6bs-min.png","cardPics/6rd-min.png","cardPics/6rh-min.png"],
    ["cardPics/7bc-min.png","cardPics/7bs-min.png","cardPics/7rd-min.png","cardPics/7rh-min.png"],
    ["cardPics/8bc-min.png","cardPics/8bs-min.png","cardPics/8rd-min.png","cardPics/8rh-min.png"],
    ["cardPics/9bc-min.png","cardPics/9bs-min.png","cardPics/9rd-min.png","cardPics/9rh-min.png"],
    ["cardPics/10bc-min.png","cardPics/10b-mins.png","cardPics/10-minrd.png","cardPics/1-min0rh.png"
    ,"cardPics/Jbc-min.png","cardPics/Jbs-min.png","cardPics/Jrd-min.png","cardPics/Jrh-min.png"
    ,"cardPics/Qbc-min.png","cardPics/Qbs-min.png","cardPics/Qrd-min.png","cardPics/Qrh-min.png"
    ,"cardPics/Kbc-min.png","cardPics/Kbs-min.png","cardPics/Krd-min.png","cardPics/Krh-min.png"],
    ["cardPics/11bc-min.png","cardPics/11b-mins.png","cardPics/11-minrd.png","cardPics/1-min1rh.png"]
]
let sum = 0
let dealerSum = 0
let lost = false

function play() {
    let num1 = Math.ceil(Math.random() * 10)+1
    let num2 = Math.ceil(Math.random() * 10)+1
    sum = num1 + num2

    playEl.style.display = "none"
    cardsEl.innerText = ""
    dealerEl.innerText = ""

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

    else if(dealerSum > 21 || sum > dealerSum) {
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