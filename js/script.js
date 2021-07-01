var alertButton = document.getElementById("mybutton");

alertButton.addEventListener("click", function () {
    alert("button clicked");
});

const body = document.querySelector(".blue-background");
const changeBackground = document.querySelector("#change-background")

const toggleColor = function () {
    body.classList.toggle("red-background");
}

changeBackground.addEventListener("click", toggleColor);
