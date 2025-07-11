let vibe = 'neutral'
let day = 'mine'
let shot = 'hit'


function buttonsClickWatch() {
const vibeBtn = document.getElementById('vibeBtn')

    let avgButtonsClicked = 6

    let buttonsClicked = 0
    vibeBtn.addEventListener('click', buttonsClicked++)

    if (buttonsClicked > avgButtonsClicked) {
    shot = 'scored'
    vibe = 'great'
    day = 'mine'
}

if (buttonsClicked < avgButtonsClicked) {
    shot = 'missed' 
    vibe = 'bad'
    day = 'not mine'
}

if (buttonsClicked.length === 0) {
    console.log('You gotta take a shot to make one!')
}

console.log('the shot was ' + shot + ', the vibe is ' + vibe + ', so that always means the day is ' + day)
}



buttonsClickWatch()

