const custoProduto = 100;
const valorVenda = 1000;

if (custoProduto >= 0 && valorVenda >= 0) {
    let CustoTotal = custoProduto + (custoProduto * 0.2);
    let lucro = valorVenda - CustoTotal;
    console.log(lucro * 1000);
}
else {
    console.log('Erro! Valor inválido');
}

