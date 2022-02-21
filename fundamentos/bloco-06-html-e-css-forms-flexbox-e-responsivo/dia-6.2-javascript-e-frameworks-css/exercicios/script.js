const buttonSubmit = document.getElementById('submit-button')

function preventDefault(event) {
  event.preventDefault();
}

// buttonSubmit.addEventListener('click', preventDefault);

const boxButtons = document.getElementById('buttons');

function createButton() {
  const buttonReset = document.createElement('button');
  buttonReset.id = 'reset-button'
  buttonReset.innerHTML = 'Apagar'
  buttonReset.type = 'reset'
  buttonReset.className = 'btn btn-danger'
  boxButtons.appendChild(buttonReset);
}

createButton();

const information = document.querySelectorAll('#box-personal-information');

// let date = document.getElementById('myInputId').DatePickerX.init();

const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
    {
      rule: 'email',
      errorMessage: 'Email is invalid!',
    },
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ]);