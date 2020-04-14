(() => {
    const awesomeButtonEl = document.getElementById("awesomeButton");
    const goodButtonEl = document.getElementById("goodButton");
    const badButtonEl = document.getElementById("badButton");
    const answerEl = document.getElementById("answer");

    function handleAwesomeButtonClick() {
        answerEl.textContent = "That's amazing 😍";
    }

    function handleGoodButtonClick() {
        answerEl.textContent = "That's great 😊";
    }

    function handleBadButtonClick() {
        answerEl.textContent = "Oh that's sad 😥";
    }

    awesomeButtonEl.addEventListener("click", handleAwesomeButtonClick);
    goodButtonEl.addEventListener("click", handleGoodButtonClick);
    badButtonEl.addEventListener("click", handleBadButtonClick);
})();
