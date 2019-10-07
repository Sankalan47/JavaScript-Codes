function increaseHighScore(currentScore) {
    var newHighScore = 2* currentScore;
    return newHighScore;
}
console.log(increaseHighScore(4))

var newHighScore = function(currentScore){

    newHighScore = 2*currentScore;
    return newHighScore;

}

document.getElementById("test").innerHTML = newHighScore(10);