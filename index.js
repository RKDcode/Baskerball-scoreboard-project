let homeScoreEl = document.getElementById("home-score-display")
let homeScoreTotal = 0

let guestScoreEl = document.getElementById("guest-score-display")
let guestScoreTotal = 0

function addOneToHome(){
    homeScoreTotal += 1
    homeScoreEl.textContent = homeScoreTotal
}

function addTwoToHome(){
    homeScoreTotal += 2
    homeScoreEl.textContent = homeScoreTotal
}

function addThreeToHome(){
    homeScoreTotal += 3
    homeScoreEl.textContent = homeScoreTotal
}

function addOneToGuest(){
    guestScoreTotal += 1
    guestScoreEl.textContent = guestScoreTotal
}

function addTwoToGuest(){
    guestScoreTotal += 2
    guestScoreEl.textContent = guestScoreTotal
}

function addThreeToGuest(){
    guestScoreTotal += 3
    guestScoreEl.textContent = guestScoreTotal
}

function reset(){
    homeScoreTotal = 0
    guestScoreTotal = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}