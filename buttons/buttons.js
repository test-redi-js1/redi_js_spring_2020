(() => {
    const awesomeButtonEl = document.getElementById("awesomeButton");
    const goodButtonEl = document.getElementById("goodButton");
    const badButtonEl = document.getElementById("badButton");
    const burgerButtonEl = document.getElementById("burgerButton");
    const answerEl = document.getElementById("answer");
    const strangeButtonEl = document.getElementById("strangeButton");

    function handleAwesomeButtonClick() {
        answerEl.textContent = "That's amazing 😍";
    }

    function handleGoodButtonClick() {
        answerEl.textContent = "That's great 😊";
    }

    function handleBadButtonClick() {
        answerEl.textContent = "Oh that's sad 😥";
    }

    function burgerButtonClick(){
        alert('Burger button was just clicked');
    }

    function strangeButtonClick(){
        alert('Strange button was clicked');
    }

    function strangeButtonHover(){
        strangeButtonEl.classList.add("strangeButton--hover")
    }

    function strangeButtonLeave(){
        strangeButtonEl.classList.remove("strangeButton--hover");
    }

    awesomeButtonEl.addEventListener("click", handleAwesomeButtonClick);
    goodButtonEl.addEventListener("click", handleGoodButtonClick);
    badButtonEl.addEventListener("click", handleBadButtonClick);
    burgerButtonEl.addEventListener("click", burgerButtonClick);
    strangeButtonEl.addEventListener("click", strangeButtonClick);
    strangeButtonEl.addEventListener("mouseenter", strangeButtonHover);
    strangeButtonEl.addEventListener("mouseleave", strangeButtonLeave);
})();
