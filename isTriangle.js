var angleOne = document.querySelector("#angle-1-degree");
var angleTwo = document.querySelector("#angle-2-degree");
var angleThree = document.querySelector("#angle-3-degree");
var isTriangleButton = document.querySelector("#is-triangle-button");
var result = document.querySelector("#result")


var sumOfAnglesInTriangle = 180;

isTriangleButton.addEventListener("click", function clickHandler() {

    var angleSum = parseInt(angleOne.value) + parseInt(angleTwo.value) + parseInt(angleThree.value);
    result.style.display = "block";

    if (angleOne.value <= 0 || angleOne.value > 360 || angleTwo.value <= 0 || angleTwo.value > 360|| angleThree.value <= 0 || angleThree.value > 360)
        result.innerHTML = "OOPS! 😌 it's not a triangle";

    else if((360 - angleOne.value + 360 - angleTwo.value + 360 - angleThree.value) === 180)
        result.innerHTML = "Yep! it's a triangle 😤";

    else if (angleSum === sumOfAnglesInTriangle)
        result.innerHTML = "Yep! it's a triangle 😤";

    else
        result.innerHTML = "OOPS! 😌 it's not a triangle";
});