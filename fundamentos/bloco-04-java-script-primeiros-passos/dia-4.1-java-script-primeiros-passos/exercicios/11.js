const salarioBruto = 10000;
let inss = 0;
let ir = 0;

if (salarioBruto <= 1556.94) {
    inss = 8/100;
    let salarioBase = salarioBruto - (salarioBruto * inss);
    if (salarioBase <= 1903.98) {
        let aliquota = 0;
        let deducao = 0;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let aliquota = 7.5/100;
        let deducao = 142.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        let aliquota = 15/100;
        let deducao = 254.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        let aliquota = 22.5/100;
        let deducao = 636.13;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase > 4664.68) {
        let aliquota = 27.5/100;
        let deducao = 869.36;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    inss = 9/100;
    let salarioBase = salarioBruto - (salarioBruto * inss);
    if (salarioBase <= 1903.98) {
        let aliquota = 0;
        let deducao = 0;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let aliquota = 7.5/100;
        let deducao = 142.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        let aliquota = 15/100;
        let deducao = 254.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        let aliquota = 22.5/100;
        let deducao = 636.13;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase > 4664.68) {
        let aliquota = 27.5/100;
        let deducao = 869.36;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    inss = 11/100;
    let salarioBase = salarioBruto - (salarioBruto * inss);
    if (salarioBase <= 1903.98) {
        let aliquota = 0;
        let deducao = 0;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let aliquota = 7.5/100;
        let deducao = 142.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        let aliquota = 15/100;
        let deducao = 254.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        let aliquota = 22.5/100;
        let deducao = 636.13;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase > 4664.68) {
        let aliquota = 27.5/100;
        let deducao = 869.36;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
}
else if (salarioBruto > 5189.82) {
    inss = 570.88;
    let salarioBase = salarioBruto - inss;
    if (salarioBase <= 1903.98) {
        let aliquota = 0;
        let deducao = 0;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        let aliquota = 7.5/100;
        let deducao = 142.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
        let aliquota = 15/100;
        let deducao = 254.80;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
        let aliquota = 22.5/100;
        let deducao = 636.13;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
    else if (salarioBase > 4664.68) {
        let aliquota = 27.5/100;
        let deducao = 869.36;
        ir = (aliquota * salarioBase) - deducao;
        let salarioLiquido = salarioBase - ir;
        console.log(salarioLiquido);
    }
}
else {

}