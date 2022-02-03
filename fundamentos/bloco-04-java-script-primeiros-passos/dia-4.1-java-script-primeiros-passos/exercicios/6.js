let pecaDeXadrez = 'Peão'.toLocaleLowerCase();
pecaDeXadrez = 'Rainha'.toLocaleLowerCase();
pecaDeXadrez = 'Torre'.toLocaleLowerCase();

switch (pecaDeXadrez) {
  case 'peão':
    console.log('1 casa a frente');
    break;

  case 'bispo':
    console.log('Diagonal');
    break;
    
  case 'rainha':
    console.log('linha reta em qualquer direção');
    break;

  case 'torre':
    console.log('linha reta lateral ou em frente');
    break;

  default :
  console.log('erro');
}

