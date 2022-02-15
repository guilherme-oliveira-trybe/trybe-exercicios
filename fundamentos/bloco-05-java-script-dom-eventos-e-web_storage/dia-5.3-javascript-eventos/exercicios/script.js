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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const listDays = document.querySelector('#days');

function createListDezDays() {
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

