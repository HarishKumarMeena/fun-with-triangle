var base = document.querySelector("#base");
var height = document.querySelector("#height");
var areaButton = document.querySelector("#area-button");
var result = document.querySelector("#result");

areaButton.addEventListener("click", function clickHandler() {

    var areaCalculation = 0.5 * parseInt((base.value)) * parseInt((height.value));

    result.style.display = "block";

    if (base.value < 0 || height.value < 0)
        result.innerHTML = "Please enter +ve values"

    else
        result.innerHTML = "Area is: " + areaCalculation;

});