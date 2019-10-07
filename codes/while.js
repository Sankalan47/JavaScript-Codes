var greeting = "";

var i = 0;

while(i <= 5){
    greeting = "<br> the value is:" + i;
    i++;
}

document.getElementById("test").innerHTML = greeting;