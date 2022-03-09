const acordando = () => `Acordando!!`;
const cafeDaManha = () => `Bora tomar café!!`;
const dormir = () => `Partiu dormir!!`

const doingThings = (func) => func(console.log(func()));

doingThings(acordando);
doingThings(cafeDaManha);
doingThings(dormir);
