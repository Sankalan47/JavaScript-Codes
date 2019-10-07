var greeting = ""


var harley = ["aa", "bb", "cc"]

var i;

for(i = 0; i<harley.length; i++){
    greeting += harley[i] + "<br>";
}

document.getElementById("test").innerHTML = greeting;