const buttonSubmit = document.getElementById('submit-button')

function preventDefault(event) {
    event.preventDefault();
}

buttonSubmit.addEventListener('click', preventDefault);

const boxButtons = document.getElementById('buttons');

function createButton() {
    const buttonReset = document.createElement('button');
    buttonReset.id = 'reset-button'
    buttonReset.innerHTML = 'Apagar'
    buttonReset.type = 'reset'
    boxButtons.appendChild(buttonReset);
}

createButton();
