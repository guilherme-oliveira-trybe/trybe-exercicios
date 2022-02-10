let header = document.querySelector('header');
header.style.background = 'green';

let emergencyClass = document.querySelector('.emergency-tasks');
emergencyClass.style.background = 'lightcoral';

let noEmergencyClass = document.querySelectorAll('.no-emergency-tasks')[0];
noEmergencyClass.style.background = 'yellow';

let subTitles = document.getElementsByClassName('subtitle');
for (let index = 0; index < subTitles.length; index += 1) {
    subTitles[index].style.background = 'purple';
}

let subTitles2 = document.getElementsByClassName('subtitle2');
for (let index = 0; index < subTitles2.length; index += 1) {
    subTitles2[index].style.background = 'black';
}