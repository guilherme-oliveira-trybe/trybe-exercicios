let header = document.querySelector('header');
header.style.background = 'green';

let emergencyClass = document.querySelector('.emergency-tasks');
emergencyClass.style.background = 'lightcoral';

let noEmergencyClass = document.querySelectorAll('.no-emergency-tasks')[0];
noEmergencyClass.style.background = 'orange';

let subTitles = document.querySelectorAll('.emergency-tasks div h3');
for (let index in subTitles) {
    subTitles[index].style.background = 'purple';
}