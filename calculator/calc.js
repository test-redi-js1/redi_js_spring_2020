(() => {
    const numberInputEl = document.querySelector('input.js-num');
    const addBtnEl = document.querySelector('button.js-add-btn');
    const sumEl = document.querySelector('.js-sum-box');
    const numberListEl = document.querySelector('ul.js-num-list');

    let sum = 0;

    function handleAddBtnClick() {
        const numberToAdd = parseFloat(numberInputEl.value);

        sum = sum + numberToAdd; // update sum
        sumEl.textContent = sum; // update sum element

        // add number to number list
        const numberEl = document.createElement('li'); // <li></li>
        numberEl.textContent = numberToAdd; // <li>33</li>
        numberListEl.appendChild(numberEl);

        // clear input
        numberInputEl.value = '';
    }

    addBtnEl.addEventListener('click', handleAddBtnClick);
})();
