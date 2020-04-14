function showAlert(element) {
    alert(`You just clicked on ${element.innerText}`);
}

let awesomeButtonCmp = document.getElementById("awesomeButton");
let goodButtonCmp = document.getElementById("goodButton");
let badButtonCmp = document.getElementById("badButton");
let answerCmp = document.getElementById("answer");

function awesomeButtonClick() {
    answerCmp.textContent = "That's amazing 😍";
}

function goodButtonClick() {
    answerCmp.textContent = "That's great 😊";
}

function badButtonClick() {
    answerCmp.textContent = "Oh that's sad 😥";
}

awesomeButtonCmp.addEventListener("click", awesomeButtonClick);
goodButtonCmp.addEventListener("click", goodButtonClick);
badButtonCmp.addEventListener("click", badButtonClick);
