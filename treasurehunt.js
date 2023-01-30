    //randomizng the bone and cat locations on table and logging to console
    var treasureLoc = Math.floor(Math.random() *9)
    console.log(treasureLoc)
    var catLoc = Math.floor(Math.random() *9)
    console.log(catLoc)

// ensure treasure and bomb are not in the same spot "does this need a return"
    if(treasureLoc === catLoc){
        var treasureLoc = (catLoc - 1)
    } 

//increment turn counter
var turnCounter = 0 
//what happens when user clicks. the (guess) is the spot/location clicked
const treasure = (guess) => {
    // when user clicks, increment turn counter by 1
    turnCounter = turnCounter+1 //increment variable turnCounter
    document.getElementById("turnCounter").innerHTML = `${turnCounter}` //update turn counter on HTML
    document.getElementById(guess).style.pointerEvents = "none"
    if(guess === treasureLoc) { // if user finds treasure, bone appears
       document.getElementById(guess).innerHTML = "🦴" // works
// change html on page to declare a winner above table- works
       document.getElementById("win").innerHTML = "YOU WIN!!!"
       document.getElementById("treasure-hunt-table").style.pointerEvents = "none"
    } else if(guess === catLoc) { // if user finds bomb, cat appears
        document.getElementById(guess).innerHTML = "😾" // works
        document.getElementById("treasure-hunt-table").style.pointerEvents = "none"
        return document.getElementById("win").innerHTML = "YOU LOSE!!!"
    } else {
        return document.getElementById(guess).innerHTML = "🕳️" // if user clicks neither, empty hole appears
    }
    }
