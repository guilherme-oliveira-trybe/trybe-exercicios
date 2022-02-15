function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createListDezDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const listDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dezDays = dezDaysList[index];
    const dezDaysListItem = document.createElement('li');
    dezDaysListItem.innerHTML = dezDays;
    dezDaysListItem.className = 'day';

    listDays.appendChild(dezDaysListItem);
  };
};

createListDezDays();

const lista = document.getElementsByClassName('day');

function addClassLi(array, classes) {
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < lista.length; index2 += 1)
    if (array[index] === lista[index2].innerHTML) {
      lista[index2].classList.add (classes);
    }
  }
};

addClassLi(['24', '25', '31'], 'holiday');

addClassLi(['4', '11', '18', '25'], 'friday');

function createButton () {
  const buttonsContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerHTML = 'Feriados';
  button.id = 'btn-holiday';
  buttonsContainer.appendChild(button);
}

createButton();

const button = document.querySelector('#btn-holiday');
let isHoliday = true;

function changeBackgroundColor () {
  const holiday = document.querySelectorAll('.holiday');

  if (isHoliday) {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.background = 'red';
    }  
  }else {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.background = 'rgb(238,238,238)';
    }
  }
  isHoliday = !isHoliday;
}

button.addEventListener('click', changeBackgroundColor);

function createButton2 () {
  const buttonsContainer2 = document.querySelector('.buttons-container');
  const button2 = document.createElement('button');
  button2.innerHTML = 'Sexta-feira';
  button2.id = 'btn-friday';
  buttonsContainer2.appendChild(button2);
}

createButton2();

const button2 = document.querySelector('#btn-friday');
let isFriday = true;
let fridayDays = ['4', '11', '18', '25'];

function changeTextFriday () {
  const friday = document.querySelectorAll('.friday');

  if (isFriday) {
    for (let index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = 'Sextou!!!';
    }  
  }else {
    for (let index = 0; index < friday.length; index += 1) {
      friday[index].innerHTML = fridayDays[index];
    }
  }
  isFriday = !isFriday;
}
button2.addEventListener('click', changeTextFriday);

let daysLi = document.getElementById('days');

function zoom(event) {
  event.target.style.fontSize = '40px';
}

function notZoom(event) {
  event.target.style.fontSize = '20px';
}

daysLi.addEventListener('mouseover', zoom);
daysLi.addEventListener('mouseout', notZoom);

const myTasks = document.querySelector('.my-tasks');

function createTask (string) {
  const task = document.createElement('span');
  task.innerHTML = string;
  myTasks.appendChild(task);
}

createTask('Arrumar Casa');

function createLegend(cor) {
  const legend = document.createElement('div');
  legend.style.background = cor;
  legend.className = 'task';
  myTasks.appendChild(legend);
}

createLegend('red');