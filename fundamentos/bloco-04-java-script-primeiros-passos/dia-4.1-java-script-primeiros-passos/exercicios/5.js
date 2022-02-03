const ladoA = 80;
const ladoB = 60;
const ladoC = 60;

if (ladoA + ladoB + ladoC === 180){
    console.log(true);
}
else if ( ladoA < 0 || ladoB < 0 || ladoC < 0){
    console.log('Erro! Ângulo Inválido');
}
else {
    console.log(false);
}