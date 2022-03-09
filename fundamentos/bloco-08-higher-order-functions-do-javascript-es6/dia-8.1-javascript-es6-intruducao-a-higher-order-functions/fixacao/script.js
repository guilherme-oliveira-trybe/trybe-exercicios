const acordando = () => `Acordando!!`;
const cafeDaManha = () => `Bora tomar café!!`;
const dormir = () => `Partiu dormir!!`

const doingThings = (callback) => func(console.log(callback()));

doingThings(acordando);
doingThings(cafeDaManha);
doingThings(dormir);
