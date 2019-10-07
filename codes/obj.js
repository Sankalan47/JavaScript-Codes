var harley = {
    firstName: "street",
    secondName: "jd",
    cc: "1250",
    fullName: function() {
        return this.firstName + "-" + this.secondName;
    }
}

document.getElementById("test").innerHTML = harley.firstName(); 