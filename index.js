let homePoints = 0
let guestPoints = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addHomePoints(points) {
    homePoints += points
    homeScore.innerText = homePoints
}

function addGuestPoints(points) {
    guestPoints += points
    guestScore.innerText = guestPoints
}

function newGame() {
    homePoints = 0
    homeScore.innerText = homePoints
    guestPoints =0
    guestScore.innerText = guestPoints
}