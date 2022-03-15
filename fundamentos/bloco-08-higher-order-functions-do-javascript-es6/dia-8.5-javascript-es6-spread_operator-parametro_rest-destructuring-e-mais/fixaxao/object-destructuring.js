
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = {...user, ...jobInfos};

console.log(userInfo);

const { name, age, nationality,} = user;
const { profession, squad, squadInitials} = jobInfos;

console.log(`Hi, my mane is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);