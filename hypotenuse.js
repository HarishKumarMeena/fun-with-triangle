var sideA = document.querySelector("#side-a");
var sideB = document.querySelector("#side-b");
var hypeButton = document.querySelector("#hypotenuse-button");
var result = document.querySelector("#result");

hypeButton.addEventListener("click", function clickHandler(){
    var hypeCalculation = Math.sqrt((sideA.value * sideA.value) +  (sideB.value * sideB.value));

    result.style.display = "block";

    result.innerHTML = "Hypotenuse is: " + hypeCalculation;
});
